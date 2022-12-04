import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Map as MapItem,
  Placemark,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';

import carIcon from '../../../assets/icons/map-car.svg';

import styles from './MapContainer.module.scss';

const defaultState = {
  center: [51.133175, 71.430313],
  zoom: 15,
  behaviors: ['Drag'],
};

export const MapContainer = () => {
  const map = useRef(null);

  return (
    <YMaps>
      <div className={styles.container}>
        <MapItem
          instanceRef={map}
          width="100%"
          height="100%"
          state={defaultState}
          // options={{ b: false }}
        >
          <ZoomControl />
        </MapItem>
      </div>
    </YMaps>
  );
};

MapContainer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.arrayOf(PropTypes.number),
  icon: PropTypes.string,
};
