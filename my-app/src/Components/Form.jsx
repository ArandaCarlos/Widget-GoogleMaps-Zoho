import React, {useEffect} from "react";
import { useWidget } from "../contexts/ZohoContext";

const Form = () => {
    const {mapCenter, city, country, province, postal}=useWidget();
    //console.log(mapCenter);

    useEffect(() => {
        let inp = document.getElementById("latitud");
        inp.value = mapCenter.lat;
        inp = document.getElementById("longitud");
        inp.value = mapCenter.lng;
    }, [mapCenter])

    useEffect(() => {
       let inp = document.getElementById("city");
       inp.value = city;
       inp = document.getElementById("country");
       inp.value = country;
       inp = document.getElementById("province");
       inp.value = province;
       inp = document.getElementById("postal");
       inp.value = postal;
    }, [city, country, province, postal])
    return ( 
        <form className="row g-3 container">
            <div className="col-md-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control" id="city" readOnly="readOnly"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Province</label>
                <input type="text" className="form-control" id="province" readOnly="readOnly"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Postal Code</label>
                <input type="text" className="form-control" id="postal" readOnly="readOnly"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Country</label>
                <input type="text" className="form-control" id="country" readOnly="readOnly"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Latitud</label>
                <input type="text" className="form-control" id="latitud" readOnly="readOnly"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Longitud</label>
                <input type="text" className="form-control" id="longitud" readOnly="readOnly"/>
            </div>
        </form>
     );
}
 
export default Form;