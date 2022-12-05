import React, { useRef, useState, useEffect } from "react";

// TODO mapbox and react18 issue
// eslint-disable-next-line
import mapboxgl from '!mapbox-gl';

import carIcon from "../../../assets/icons/map-car.svg";
import styles from "./MapContainer.module.scss";

export const MapContainer = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaG9uZXN0dG9ueSIsImEiOiJjbGI2NmQ0MG4wMXBvM25vYnJ1ZGl5OHFkIn0.qvu65MXGtNbFdwjAkgtUKQ";
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  );
};
