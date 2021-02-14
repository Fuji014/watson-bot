import React, {useState, useEffect} from 'react';

import {Dropdown} from 'react-bootstrap';

// components
import MapComponent from '../../components/Map';


function Map() {

    const [location, setLocation] = useState({ DE_VERE_GARDENS : {lat: 51.509865 ,lng: -0.118092}, 
        LAKESIDE_DRIVE : {lat: 34.80746,lng: -40.474796}, BRIDGE_LANE : {lat: 34.80746,lng: -40.474796}, SLOANE_AVENUE: {lat: 34.80746,lng: -40.474796} })

    const [mapCenter, setMapCenter] = useState({ lat: 51.509865, lng: -0.118092 }); 
    const [mapZoom, setMapZoom] = useState(11);

    const [countries, setCountries] = useState([
        { country: "DE_VERE_GARDENS" ,lat: 51.509865 ,lng: -0.118092}, 
        {country: "LAKESIDE_DRIVE",lat: 34.80746,lng: -40.474796}, {country :"BRIDGE_LANE" ,lat: 34.80746,lng: -40.474796},  {country: "SLOANE_AVENUE", lat: 34.80746,lng: -40.474796}
    ]);
    
    // functions
    const handleSelect = () => {
        setLocation(test);
    }
    


    return (
        <div>
            {/* <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Select Location </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="north">North</Dropdown.Item>
                <Dropdown.Item eventKey="east">East</Dropdown.Item>
                <Dropdown.Item eventKey="south_east">South East</Dropdown.Item>
                <Dropdown.Item eventKey="south_west">South West</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown> */}
            <MapComponent center={location == null ? location : location.DE_VERE_GARDENS} zoom={mapZoom} countries={countries} />
            
        </div>
    )
}

export default Map
