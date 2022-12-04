import React from 'react';

import { Layout } from '../../components/Layouts/Layout';
import { MapContainer } from './MapContainer';

import styles from './Map.module.scss';
import { OrderInfo } from '../OrderInfo';

export const Map = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.orderContainer}>
          <OrderInfo />
        </div>
        <MapContainer />
      </div>
    </Layout>
  );
};
