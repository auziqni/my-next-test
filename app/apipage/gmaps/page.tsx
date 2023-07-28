"use client";
import React from "react";
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
//   useJsApiLoader,
// } = require("react-google-maps");
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -5.361793456080359,
  lng: 105.22587690565686,
};
// const ApiKey : string = process.env.GMAPS_API_KEY ;

export default function page() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",

    //todo taruh api di .env file
    googleMapsApiKey: "AIzaSyBElwKJ9pelcp8nNwM9jiY7SutnLM38e_Y",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}

      <Marker position={{ lat: -5.361793456080359, lng: 105.22587690565686 }} />
    </GoogleMap>
  ) : (
    <></>
  );
}
