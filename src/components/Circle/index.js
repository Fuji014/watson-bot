import React from 'react';
import './style.css';
import { Circle as CircleLeaf, Popup} from 'react-leaflet';

function Circle({lat,lng,url,area,street,discription}) {
    return (
        <CircleLeaf 
        center={[lat,lng]}
        fillOpacity={0.4}
        color='#CC1034'
        fillColor='#CC1034'
        radius={
            300
        }
    >

    <Popup>
        <div className="info-container">
            <div
            className='info-image'
             style={{backgroundImage: `url(${url})`}} />
            <div className='info-street'><b>Street:</b> {street}</div>
            <div className='info-description'><b>Description:</b> {discription}</div>
        </div>
    </Popup>
</CircleLeaf>
    )
}

export default Circle
