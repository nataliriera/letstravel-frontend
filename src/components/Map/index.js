

// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import 'mapbox-gl/dist/mapbox-gl.css';


// mapboxgl.accessToken = 'pk.eyJ1IjoibmF0eXJpZXJhMTkiLCJhIjoiY2wwbjNmMmx3MWNndjNjbjVhcGlucHlqZSJ9.jUoAmVa7H9NjA2ria3tHiQ';

// const mapContainer = useRef(null);
// const map = useRef(null);
// const [lng, setLng] = useState(-80.1918);
// const [lat, setLat] = useState(25.7617);
// const [zoom, setZoom] = useState(9);

// // Set marker options.

 



// useEffect(() => {
// if (map.current) return; // initialize map only once
// map.current = new mapboxgl.Map({
// container: mapContainer.current,
// style: 'mapbox://styles/natyriera19/cl0n1s79p005q14pf1ioc33jm',
// center: [lng, lat],
// zoom: zoom
// });
// });
 
// useEffect(() => {
// if (!map.current) return; // wait for map to initialize
// map.current.on('move', () => {
// setLng(map.current.getCenter().lng.toFixed(4));
// setLat(map.current.getCenter().lat.toFixed(4));
// setZoom(map.current.getZoom().toFixed(2));
// });
// });
// var marker = new mapboxgl.Marker()
//   .setLngLat([-80.1918, 25.7617])
//   .addTo(map);


// return (
// <div>
// <div className="sidebar">
// Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}

// </div>
// <div ref={mapContainer} className="map-container" />
// {marker}
// </div>

// );
// }


// MAPLIBRE -- --------------------------//
import {useState, useEffect} from 'react';
import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {Room, Star} from '@material-ui/icons';
import {getpin} from "../../services/pinService"; 

function PinMap() {
  const [pins, setPins] = useState([]);
    const [viewport, setViewport] = useState({
      latitude: 25.7617,
      longitude: -80.1918,
      zoom: 4
    });

    useEffect(() => {
      const getPins = async () => {
          try{
            const allPins = await getpin();
            // setPins(allPins.data);
            console.log(allPins)
          }catch(err){
            console.log(err);
          }
      }
      getPins();
      // const getPins = async () => {
      //   try {
      //     const allPins = await axios.get("/pins");
      //     setPins(allPins.data);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // };
      // getPins();
    }, []);

  return (
    <Map
    
      initialViewState={
        {...viewport}
      }
      mapLib={maplibregl}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      {/* {pins.map((p)=>( */}

      
      <Marker 
      longitude={2.294694} 
      latitude={48.858093}
      offsetLeft={-20}
      offsetTop={-10} 
      >
        <Room style={{fontSize:viewport.zoom * 7, color:'slateblue'}}/>
        </Marker>
        <Popup
        latitude={48.858093}
        longitude={2.294694}
        closeButton={true}
        closeOnClick={false}
        anchor="left"
        >
           <div className='card'>
           <label>Place</label>
           <h4 className='place'> Eifell tower</h4>
             <label>Review</label>
             <p className='desc'>beautiful</p>
             <label>Rating</label>
             <div className='stars'>
             <Star className='star'/>
             <Star className='star'/>
             <Star className='star'/>
             <Star className='star'/>
             <Star className='star'/>
             </div>
            <label>Information</label>
             <span className='username'>Created by <b>username</b></span>
           </div>
          
        </Popup> 
    </Map>
  );
}

// MAPLIBRE -- --------------------------//




export default PinMap;