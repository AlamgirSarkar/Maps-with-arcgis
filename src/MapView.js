import React, { useRef, useEffect, useState} from "react";



const MapView = ({ basemap,zoom })=>{
    const [view, setView] = useState(null)
    const mapRef = useRef();
    useEffect(()=>{
        //read map and view properties from props
        const mapProperties = { basemap }
        const viewProperties = { zoom }
        //create map and view
        const view = createMapView(mapRef.current, mapProperties, viewProperties)
        //clean up
        view.map.basemap = basemap;
        return ()=>{ view && view.destroy() }
    },[basemap])
    return <div ref = {mapRef}></div>;
}
export default MapView;