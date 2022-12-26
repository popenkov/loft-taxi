import React, { useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';
// TODO mapbox and react18 issue
// eslint-disable-next-line
// import mapboxgl from '!mapbox-gl';
import mapboxgl from 'mapbox-gl';

import styles from './MapContainer.module.scss';
import { drawRoute } from '../../../utils/drawRoute';
import { useSelector } from 'react-redux';
import { MAP_SETTINGS } from '../../../constants/constants';

export const MapContainer = ({ isOrderPlaced }) => {
  const { routes } = useSelector((state) => state.route);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: MAP_SETTINGS.CENTER,
      zoom: MAP_SETTINGS.ZOOM,
    });
  });

  useEffect(() => {
    if (map.current && routes.length > 0) {
      drawRoute(map.current, routes);
    }
  }, [routes]);

  useEffect(() => {
    if (!isOrderPlaced && map.current.getLayer('route')) {
      removeRoute();
    }
  }, [isOrderPlaced]);

  const removeRoute = () => {
    map.current.flyTo({
      center: MAP_SETTINGS.CENTER,
      zoom: MAP_SETTINGS.ZOOM,
    });
    map.current.removeLayer('route');
    map.current.removeSource('route');
  };

  return (
    <div>
      <div ref={mapContainer} className={styles.mapContainer} />
    </div>
  );
};

MapContainer.propTypes = {
  isOrderPlaced: PropTypes.bool.isRequired,
};
