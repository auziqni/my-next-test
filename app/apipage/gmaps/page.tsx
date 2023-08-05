"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import Map from "./components/maps";

export default function Gmaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // libraries: ["places"],

    //* kalo file yang di simpen di .env harus liat public atatu tidak
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY!,
  });
  return isLoaded ? (
    <main>
      <Map />
    </main>
  ) : (
    <main>loading. . .</main>
  );
}
