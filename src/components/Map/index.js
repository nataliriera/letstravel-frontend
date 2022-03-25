

import React, { useEffect, useState } from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import {getpin} from '../../services/pinService'
import { Room } from "@material-ui/icons";



function PinMap() {
    const [viewport, setViewport] = useState({
        latitude: 47.040182,
        longitude: 17.071727,
        zoom: 4,
      });
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [pins, setPins] = useState([])

  

    useEffect(() => {
        const getData = async () => {
            const response = await getpin()
            setPins(response.data)
            console.log(response.data)
        }

        getData()
    }, [])
 const handleMarkerClick = (id)=>{
     setCurrentPlaceId(id)
 };

    return (
    
    <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: '100vw', height: '100vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken="pk.eyJ1IjoibmF0eXJpZXJhMTkiLCJhIjoiY2wxMWtuN2dhMDI0bTNjcHdyNXZ2ZjhkcSJ9.randfMZz9C1NXlusbHvTIQ"
  >
      
   {pins?.map(pin => {
                return(
                    <>
    <Marker longitude={pin.long} latitude={pin.lat} anchor="bottom" color='#3FB1CE' >
        <Room
            style={{
                fontSize: 7 * viewport.zoom,
                color: "tomato",
                cursor: "pointer",
            }}
                onClick= {() => handleMarkerClick(pin._id)}
                    
            />

{pin._id === currentPlaceId && (
        <Popup 
            longitude={pin.long} latitude={pin.lat}
            anchor="left"
            >
                <label>Event: {pin.title}</label>
                <br/>
            <p>{pin.desc}</p>
            <label>{pin.address}</label>
            <br/>
            <label>{pin.date}</label>
            <p>From: {pin.time}</p>
        </Popup>
        )}
    </Marker>

    
    </> 
                )
            })} 

  </Map>
    )}
export default PinMap;

