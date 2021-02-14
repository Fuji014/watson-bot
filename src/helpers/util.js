import React from 'react';
import numeral from 'numeral';
import {Circle, Popup} from 'react-leaflet';

const casesTypeColors = {
    cases: {
        hex: "d#CC1034",
        rgb: "rgb(204, 16, 52)",
        htlf_op: "rgba(204, 16, 52, 0.5)",
        multiplier: 800,
    },
    recovered: {
        hex: "#7dd71d",
        rgb: "rgb(125, 215, 29)",
        half_op: "rgba(125, 215, 29, 0.5)",
        multiplier: 1200,
    }, 
    deaths: {
        hex: '#fb443',
        rgb: "rgb(251, 68, 67, 0.5)",
        multiplier: 2000,
    }
}

// draw data on the map
export const showDataOnMap = (data, casesType='cases') => {

    <Circle 
            center={[51.509865, -0.118092]}
            fillColor='blue'
            radius={
                2000
            }
        >

        <Popup>
            <h1>Iam pop</h1>
        </Popup>
    </Circle>
    
    //     data.map((country) => {
    //         <Circle 
    //         center={[51.509865, -0.118092]}
    //         fillOpacity={0.4}
    //         color={casesTypeColors[casesType].hex}
    //         fillColor={casesTypeColors[casesType].hex}
    //         radius={
    //             120310131231
    //         }
    //     >

    //     <Popup>
    //         <h1>Iam pop</h1>
    //     </Popup>
    // </Circle>
    //     })
}