
import './App.css';
import React from 'react';
//import { setDefaultOptions } from 'esri-loader';
import {Map, WebMap,WebScene } from '@esri/react-arcgis';
// MapView from './MapView';
//import Map from './LoaderHooks';
//import ArcgisCore from './ArcgisCore';

function App() {
 //const [basemap,setBasemap] = useState('topo-vector');
  return (
    // <div style={{ width: '100vw', height: '100vh' }}>
    // <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
    // <WebScene id="f8aa0c25485a40a1ada1e4b600522681" />
    //  </div>
    // <div>
    // <MapView basemap={{basemap}} zoom="13"/>
    // <BaseMapSelect value={{basemap}} onChange={{setBasemap}}/>
    // </div>
    <div style={{ width: '100vw', height: '100vh' }}>
    <Map latitude={34.0573} longitude={-117.1949}/>
    </div>
    // <div style={{ width: '100vw', height: '100vh' }}>
    // <ArcgisCore/>
    // </div>
    
  )
}

export default App;
