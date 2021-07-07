import { createContext, useContext, useState, useEffect } from "react";
import {ZOHO} from '../assets/Zoho';
import PlacesAutocomplete,{geocodeByAddress,geocodeByPlaceId,getLatLng} from 'react-places-autocomplete';


const ZohoContext = createContext();

export default function ZohoProvider({children}) {

   const [module, setModule] = useState(null);
   const [entity, setEntity] = useState(null);
   const [record, setRecord] = useState({});
   const [mapCenter, setMapCenter]=useState(null);
   const [city, setCity] = useState();
   const [province, setProvince] = useState();
   const [postal, setPostal]= useState();
   const [country, setCountry]= useState();
   const [address, setAddress]=useState();

   useEffect(() => {

      const initWidget = () => {
         ZOHO.embeddedApp.on("PageLoad", function (data) {
            console.log(data);
            setModule(data.Entity);
            setEntity(data.EntityId);
            ZOHO.CRM.API.getRecord({Entity:data.Entity,RecordID:data.EntityId})
            .then(function(data){
                console.log(data.data[0])
                setRecord(data.data[0]);
                let direc= data.data[0].Direccion;
                if(direc==null || direc== ""){
                  direc= "San Francisco, CA, USA";
                  setAddress(direc);
                }
               geocodeByAddress(direc)
               .then(function(results){ 
                  setAddress(data.data[0].Direccion);
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
                  getLatLng(results[0]).then(({ lat, lng }) =>
                  setMapCenter({ lat, lng })
                  ).catch(error => console.error(error))
               ;}).catch(function(error) {
                  console.error("ERROR")
                  direc= "San Francisco, CA, USA";
                  setAddress(direc);
                  geocodeByAddress(direc)
               .then(function(results){ 
                  alert("Su dirección no fue encontrada en google maps, se mostrará una dirección aleatoria por el momento")
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
                  getLatLng(results[0]).then(({ lat, lng }) =>
                  setMapCenter({ lat, lng })
                  ).catch(error => console.error(error))
               ;})
               });

            })
             
         });

         ZOHO.embeddedApp.init();
      }

      setTimeout(()=> {
         initWidget();
      }, 1000);
      
   }, []);
   
   return (
      <ZohoContext.Provider value={{module: module, entity: entity, record:record, mapCenter: mapCenter, setMapCenter: setMapCenter, city:city, setCity:setCity, province:province, setProvince:setProvince, postal:postal, setPostal:setPostal, country:country, setCountry:setCountry, address:address}}>
         {children}
      </ZohoContext.Provider>
   );
};

export const useWidget = () => {

   const context = useContext(ZohoContext);

   if (!context) throw new Error("UseWidget inside ZohoContext");

   const { entity, module, record, mapCenter, setMapCenter, city, setCity, province, setProvince, postal,setPostal, country, setCountry, address } = context;

   return {
      entity, module, record, mapCenter, setMapCenter, city, setCity, province,setProvince, postal,setPostal, country, setCountry, address
   }
}