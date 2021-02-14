import React, {useState,useEffect} from 'react';
import "./Map.css";
import { MapContainer, TileLayer} from 'react-leaflet';

// components
import Circle from '../Circle';

function MapComponent({countries,casesType,center,zoom}) {
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              
                   <Circle lat={51.501280} lng={-0.185000} url={`https://a19c53f45b440f049d21-3f2703e71e5f5fed646a243f2d21abcb.ssl.cf3.rackcdn.com/property_image.858cm626.v1/for-sale/Sidmouth-Parade-London-NW2/143467/143467_8dk34vsgoh71zf7hcmu1m1p0p.jpg`} street={`Sidmouth Parade`} discription={`Kensal Rise 970m (12mins)​ , Willesden Green 780m (9mins)​,  Brondesbury Park 1060m (13mins)`} />
                   <Circle lat={51.5311232500} lng={-0.185000} url={`http://kenningtonrunoff.com/wp-content/uploads/2017/04/The-Workshop-kenningtonrunoff.com_.jpg`} street={`LAMBETH HIGH STREET, SE1`} discription={`Lambeth North 690m (8mins)`}/>
                   <Circle lat={51.5315171} lng={-0.205140} url={`https://makebelievegraphics.com/wp-content/uploads/2019/06/3d-archviz-moxon-street-london-for-simonbowdenarchitecture-nanibystudio-3.jpg`} street={`Moxon Street, W1U`} discription={`Bond Street 420m (5mins)`}/>
                   <Circle lat={51.585171} lng={-0.205140} url={`https://upload.wikimedia.org/wikipedia/commons/9/9f/Clapham_Junction_Railway_Station_South_Western_Entrance.jpg`} street={`Putney Hill, SW11`} discription={`East Putney 680m (8mins)​,  Putney 610m (7mins)`}/>

                   <Circle lat={51.12313123} lng={-0.185700} url={`https://www.grantsint.com/wp-content/uploads/2013/08/grantsimage12.jpg`} street={`DE VERE GARDENS,W8 `} discription={`Park Royal 380m (4mins)`}/>
                   <Circle lat={51.534311212300} lng={-0.286560} url={`https://www.northmarq.com/wp-content/uploads/2019/02/3899230d-8bed-4c44-8d24-af27f6bb1ec6.jpg`} street={`LAKESIDE DRIVE, NW10`} discription={`Park Royal 380m (4mins)`}/>
                   <Circle lat={51.1231} lng={-0.205970} url={`https://dandg.azureedge.net/dandgweb/p-60673/photos/original/photo_60673_7.jpg/400x300.jpg`} street={`BRIDGE LANE, SW11`} discription={`Clapham Junction 1050m (13mins), Battersea Park 1420m (17mins), Queenstown Road 1420m (17mins)`}/>
                   <Circle lat={51.123131} lng={-0.259140}url={`https://hubble.imgix.net/listings/uploads/spaces/1514/1444060170525-60sloaneave.jpg?auto=format%2Ccompress&w=1200&h=630`} street={`SLOANE AVENUE, W3`} discription={`South Kensington 500m (6mins), Sloane Square 740m (9mins), Knightsbridge 1080m (13mins)`}/>
                {/* {showDataOnMap(countries,casesType)} */}
            </MapContainer>
        </div>
    )
}

export default MapComponent
