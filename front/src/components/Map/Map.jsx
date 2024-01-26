import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "../Map/Map.css";

function Map(props) {
  const [iconName, setIconName]=useState([]);
  
  useEffect(()=>{
    setIconName([checkpointIcon1,checkpointIcon2,checkpointIcon3,checkpointIcon4,checkpointIcon5,checkpointIcon6,checkpointIcon7,checkpointIcon8,checkpointIcon9])
  },[])
  
  
  
  const checkpointIcon1 = new Icon({
    iconUrl: "http://localhost:5173/svg-check/number-one.svg",
    iconSize: [30, 125],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40],
  });
  
  const checkpointIcon2 = new Icon({
    iconUrl: "http://localhost:5173/svg-check/number-two.svg",
    iconSize: [30, 125],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40],
  });
  
  const checkpointIcon3 = new Icon({
    iconUrl: "http://localhost:5173/svg-check/number-three.svg",
    iconSize: [30, 125],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40],
  });
  
  const checkpointIcon4 = new Icon({
    iconUrl: "http://localhost:5173/svg-check/number-four.svg",
    iconSize: [30, 125],
    iconAnchor: [40, 90],
    popupAnchor: [-25, -40],
    });
    
    const checkpointIcon5 = new Icon({
      iconUrl: "http://localhost:5173/svg-check/number-five.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    });
    
    const checkpointIcon6 = new Icon({
      iconUrl: "http://localhost:5173/svg-check/number-six.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    });
    const checkpointIcon7 = new Icon({
      iconUrl: "http://localhost:5173/svg-check/number-seven.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    });
    const checkpointIcon8 = new Icon({
      iconUrl: "http://localhost:5173/svg-check/number-eight.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    });
    const checkpointIcon9 = new Icon({
      iconUrl: "http://localhost:5173/svg-check/number-nine.svg",
      iconSize: [30, 125],
      iconAnchor: [40, 90],
      popupAnchor: [-25, -40],
    });
    
    
    
    
   
  return (
    <div>
    {props.checkpoint.checkpointsInfo && (
    <MapContainer className="border-2 border-black"
      center={[props.checkpoint.checkpointsInfo[0].longitude, props.checkpoint.checkpointsInfo[0].latitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {props.checkpoint.checkpointsInfo.map((checkpoint, i) => (
        <Marker
            key={i}
            position={[checkpoint.longitude, checkpoint.latitude]}
            icon= {iconName[i]}
            >
            <Popup>
              <h2>checkpoint n°{i + 1}</h2>
              <h2>{checkpoint.name}</h2>
            </Popup>
          </Marker>
        ))}
    </MapContainer>)}
    </div>
  );}
  


export default Map;
