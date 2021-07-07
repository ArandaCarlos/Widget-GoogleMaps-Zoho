import React, { useState } from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {useWidget} from '../contexts/ZohoContext';
import Form from './Form';
import {ZOHO} from '../assets/Zoho';



const GoogleMaps = ({google}) => {
    const {record}= useWidget();
    const {address}=useWidget();
    const[state,setState]=useState({
        address:address,
        showingInfoWindow: false,
        activeMarker:{},
        selectedPlace:{}
    });
    const{mapCenter, setMapCenter}=useWidget();
    const{setCity}=useWidget();
    const{setProvince}=useWidget();
    const{setCountry}=useWidget();
    const{setPostal}=useWidget();
    
      const handleChange = address => {
        setState({ address });
      };
     
      const handleSelect = address => {
        setState({ address });
        geocodeByAddress(address)
        .then(function(results){
            
            results[0].address_components.forEach(address => {
                if(address.types.includes("administrative_area_level_2")){
                    setCity(address.long_name);
                }
                if(address.types.includes("country")){
                    setCountry(address.long_name)
                }
                if(address.types.includes("administrative_area_level_1")){
                    setProvince(address.long_name)
                }
                if(address.types.includes("postal_code")){
                    setPostal(address.long_name)
                }
            });
            
            getLatLng(results[0]).then(latLng => {
                console.log('Success', latLng);
        
                // update center state
                setMapCenter( latLng );
              })
                  
               .catch(error => console.error(error));
            })
          
      };
      const onMarkerClick = (props, marker, e) =>
        setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      const onMapClicked = (props) => {
        console.log(props);
        if (state.showingInfoWindow) {
          setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };


    const onsubmit = ()=>{
        if(record.Direccion_validada_desde_el_widget!="SI"){
            console.log(state.address)
            if(state.address==null){
                alert("debe ingresar la dirección de su tienda")
            }else{
                //https://sandbox.zohoapis.com/crm/v2/functions/update_maps_widget/actions/execute?auth_type=apikey&zapikey=1003.2adc43de08da9debb61656e2b5ee18e2.5f15e6da14582678a2cd59414c68ed79
                //https://www.zohoapis.com/crm/v2/functions/update_maps_widget/actions/execute?auth_type=apikey&zapikey=1003.7c02a5b10f13810ff9499d39a02c0d43.605b9c5964f99646e4da05c6b3e3afdc
                let map = {
                    "id": record.id,
                    "Latitud": mapCenter.lat.toFixed(10).toString(),
                    "Longitud": mapCenter.lng.toFixed(10).toString(),
                    "Direccion": state.address,
                    "Direccion_validada_desde_el_widget":"SI"
                }
                let conn_name = "crm";
                let req_data ={
                "parameters" : { 
                    map
                },
                "method" : "POST",
                "url" : "https://www.zohoapis.com/crm/v2/functions/update_maps_widget/actions/execute?auth_type=apikey&zapikey=1003.7c02a5b10f13810ff9499d39a02c0d43.605b9c5964f99646e4da05c6b3e3afdc",
                "param_type" : 1
                };
                ZOHO.CRM.CONNECTION.invoke(conn_name, req_data)
                .then(function(data){
                    console.log(data)
                })

                // ZOHO.CRM.API.updateRecord({Entity:"Apollo_Stores", 
                // APIData:{
                //     "id": record.id,
                //     "Latitud": mapCenter.lat.toFixed(10).toString(),
                //     "Longitud": mapCenter.lng.toFixed(10).toString(),
                //     "Direccion": state.address,
                //     "Direccion_validada_desde_el_widget":"SI",
                //     }}).then(function(data){
                //     console.log(data)
                // })
                proceedToNextState();
            }
        }else{
            alert("No puede cambiar, su dirección ya está validada")
        }
    }  


    function proceedToNextState() {
        ZOHO.embeddedApp.init().then(function(){
        return ZOHO.CRM.BLUEPRINT.proceed();
        }).then(function(data){
        console.log(data);
        })
    }
    function closeWindow() {
        ZOHO.embeddedApp.init().then(function(){
        return ZOHO.CRM.UI.Popup.closeReload();
        }).then(function(data){
        console.log(data);
        })
    }
    return ( 
    <div id='googleMaps' className="row">
        <div className="col mt-3">
            <div className="text-center">
                <div>Address</div>
            <PlacesAutocomplete
            value={state.address}
            onChange={handleChange}
            onSelect={handleSelect}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                <input
                    {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                    })}
                    style={{width: '60%',height: '35px'}}
                />
                <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                    const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        <div
                        {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                        })}
                        >
                        <span>{suggestion.description}</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            )}
            </PlacesAutocomplete>
            </div>
            <div className="mt-3">
                <Form/>
            </div>
            <div className=" text-center"><button className="btn btn-primary mt-5" onClick={onsubmit}>Next</button> </div>
            
        </div>
        
        <div className="col mt-3"  >
            <Map 
            google={google}
            style={{width: '45%', height: '80%', position: ''}}
            initialCenter={{
                lat: mapCenter.lat,
                lng: mapCenter.lng
            }}
            center={{
                lat: mapCenter.lat,
                lng: mapCenter.lng
            }}
            zoom={21}
            onClick={onMapClicked}
            >
                <Marker 
                    position={{
                    lat: mapCenter.lat,
                    lng: mapCenter.lng
                    }}
                    onClick={onMarkerClick}
                        name={mapCenter.lat+","+mapCenter.lng}
                        />
                <InfoWindow
                    marker={state.activeMarker}
                    visible={state.showingInfoWindow}>
                    <div>
                        <h5>{mapCenter.lat+","+mapCenter.lng}</h5>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    </div>
  );
}
 
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCmIWwq9Hetuto7tDFOVZStSt6IkZaULYM')
  })(GoogleMaps)



