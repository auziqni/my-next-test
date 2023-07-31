"use client";
import React, { useCallback, useMemo, useRef } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { listplaces } from "./listPlace";

const containerStyle = {
  width: "100%",
  height: "500px",
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
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={option}
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}

        <div></div>
        {listplaces.map((listplace) => (
          <Marker position={{ lat: listplace.lat, lng: listplace.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
}
