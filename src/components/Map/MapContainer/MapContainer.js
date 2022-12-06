import React, { useRef, useState, useEffect } from 'react';

// TODO mapbox and react18 issue
// eslint-disable-next-line
import mapboxgl from '!mapbox-gl';

import carIcon from '../../../assets/icons/map-car.svg';
import styles from './MapContainer.module.scss';
import { drawRoute } from '../../../utils/drawRoute';
import { useSelector } from 'react-redux';

export const MapContainer = () => {
  const { routes } = useSelector((state) => state.route);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaG9uZXN0dG9ueSIsImEiOiJjbGI2NmQ0MG4wMXBvM25vYnJ1ZGl5OHFkIn0.qvu65MXGtNbFdwjAkgtUKQ';
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  });

  useEffect(() => {
    if (routes.current && map) {
      // TODO не рисует карту
      drawRoute(map.current, routes);
    }
  }, [routes]);

  return (
    <div>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  );
};
