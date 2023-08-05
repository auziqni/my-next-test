"use client";
import React, { useCallback, useMemo, useRef } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";

import { listplaces } from "./listPlace";
import { url } from "inspector";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const office = {
  lat: -5.361319,
  lng: 105.226564,
};

export default function Map() {
  const mapRef = useRef<GoogleMap>();
  const onMapLoad = useCallback((map: any) => {
    mapRef.current = map;
  }, []);
  const center = useMemo(() => office, []);
  const option = useMemo(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    []
  );

  // todo use callback
  // const onLoad = useCallback((map) => (mapRef.current = map), []);
  const iconoffice = {
    url: "/images/office.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  const iconmale = {
    url: "/images/place_male.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  const iconfemale = {
    url: "/images/place_female.png",
    scaledSize: new google.maps.Size(50, 50),
  };
  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        options={option}
        onLoad={onMapLoad}
        //   onUnmount={onUnmount}
      >
        <Marker position={office} icon={iconoffice} />
        {listplaces.map((listplace) => (
          <Marker
            key={listplace.id}
            position={{ lat: listplace.lat, lng: listplace.lng }}
            icon={listplace.male ? iconmale : iconfemale}
          />
        ))}

        <Circle center={office} radius={200} options={closeOptions} />
        <Circle center={office} radius={400} options={middleOptions} />
        <Circle center={office} radius={650} options={farOptions} />
      </GoogleMap>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
