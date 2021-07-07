import { useState, useEffect } from "react";
import {useWidget} from '../contexts/ZohoContext';
import {Spinner} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleMaps from "./GoogleMaps";

const Check = () => {
    const [check, setCheck]=useState();
    const {mapCenter} = useWidget();
    const {record} = useWidget();

    useEffect(() => {
        if(mapCenter!=null){
            setCheck(true)
        }
    }, [mapCenter])

    

    return ( 
        (check? <GoogleMaps/>:<div className="text-center mt-5 "><Spinner color="primary"/></div>)
     );
}
 
export default Check;