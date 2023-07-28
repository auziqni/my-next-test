"use client";
import React, { useCallback, useMemo, useRef } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const home = {
  lat: -5.361793456080359,
  lng: 105.22587690565686,
};

export default function Map() {
  const mapRef = useRef<GoogleMap>();
  const center = useMemo(() => home, []);
  const option = useMemo(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    []
  );

  //   const onload = useCallback((map) =>(mapRef.current=map,[]))
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={option}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}

      <Marker position={home} />
    </GoogleMap>
  );
}
