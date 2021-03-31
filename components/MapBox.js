import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import HelloLogo from "./HelloLogo";

export default function MapBox({ latLong, className = "" }) {
  const latitude = latLong.latitude || 40.733543;
  const longitude = latLong.longitude || -74.004118;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 16,
    latitude,
    longitude: longitude - 0.0025,
  });

  return (
    <div className="map-wrapper">
      <MapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/trostcodes/ckmv0dszw02g717o65pne3ro4"
      >
        <Marker
          latitude={latitude}
          longitude={longitude}
          offsetLeft={100}
          offsetTop={-10}
        >
          <div className="w-10 h-10 border-8 border-white rounded-full bg-gold"></div>
          <HelloLogo height="80px" width="100px" />
        </Marker>
      </MapGL>
    </div>
  );
}
