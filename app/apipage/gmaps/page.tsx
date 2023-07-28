"use client";
import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
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
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
