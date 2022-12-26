import { ROUTES } from '../../constants/constants';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layouts/Layout';
import { OrderInfo } from '../OrderInfo';
import styles from './Map.module.scss';
import { MapContainer } from './MapContainer';
import { getStoreLocal } from '../../utils/localStorage';
import { OrderSuccess } from './OrderSuccess/OrderSuccess';

export const Map = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const isCardAdded = getStoreLocal('cardAdded');

  const handleChangeOrderStatus = () => {
    setIsOrderPlaced((prev) => !prev);
  };

  return (
    <Layout>
      <h1 className="visually-hidden">Map page</h1>
      <div className={styles.container}>
        <div className={styles.orderContainer}>
          {!isCardAdded ? (
            <div className={styles.addCardContainer}>
              <p>Пожалуйста, добавьте карту в свой аккаунт</p>{' '}
              <Link to={ROUTES.PROFILE}>В профиль</Link>
            </div>
          ) : !isOrderPlaced ? (
            <OrderInfo changeOrderStatus={handleChangeOrderStatus} />
          ) : (
            <OrderSuccess changeOrderStatus={handleChangeOrderStatus} />
          )}
        </div>
        <MapContainer isOrderPlaced={isOrderPlaced} />
      </div>
    </Layout>
  );
};
