import Map from 'react-map-gl'
import { useState } from 'react';

function map() {
     
     const [viewport, setViewport] = useState({
          width: "100%",
          height: "100%",
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 11,
     });

  return (
     <Map
     mapStyle="mapbox://styles/turxv/clbf4gj6r004114qf14ikqwcm"
     mapboxApiAccessToken={process.env.mapbox_key}
     {...viewport}
     onViewportChange={(nextViewport) => setViewport(nextViewport)}
     >
     </Map>

     
  )
}

export default map