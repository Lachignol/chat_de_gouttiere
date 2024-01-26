import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents} from "react-leaflet";
import { Icon } from "leaflet";
import "../Map/Map.css";

function MapLocation(props) {
  console.log(props.longitude);
  console.log(props.latitude);
 
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        dblclick(e) {
          map.flyTo([props.longitude, props.latitude], 
            map.getZoom())
          
          
        },
    })
  
    
  }
  

  return (
    <div>
      {props.longitude && (
       
        
    <MapContainer
      center={[props.longitude, props.latitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.longitude, props.latitude]}>
        <Popup>
          <h2>adress a ajouté</h2>
        </Popup>
      </Marker>
      <LocationMarker/>
    </MapContainer>)}
    </div>
  );
}

export default MapLocation;
