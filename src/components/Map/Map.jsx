import { ROUTES } from '../../constants/constants';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layouts/Layout';
import { OrderInfo } from '../OrderInfo';
import styles from './Map.module.scss';
import { MapContainer } from './MapContainer';
import { getStoreLocal } from '../../utils/localStorage';

export const Map = () => {
  const isCardAdded = getStoreLocal('cardAdded');

  return (
    <Layout>
      <h1 className="visually-hidden">Map page</h1>
      <div className={styles.container}>
        <div className={styles.orderContainer}>
          {!isCardAdded ? (
            <>
              <p> Пожалуйста, добавьте карту в свой аккаунт</p>{' '}
              <Link to={ROUTES.PROFILE}>В профиль</Link>
            </>
          ) : (
            <OrderInfo />
          )}
        </div>
        <MapContainer />
      </div>
    </Layout>
  );
};
