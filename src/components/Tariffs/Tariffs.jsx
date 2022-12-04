import React, { useState } from 'react';

import { TariffItem } from './TariffItem';
import standardImg from '../../assets/images/car-standard.jpg';
import businessImg from '../../assets/images/car-business.png';
import premiumImg from '../../assets/images/car-premium.jpg';
import styles from './Tariffs.module.scss';

const tariffData = [
  {
    id: 'standard',
    name: 'tariff',
    title: 'Стандарт',
    price: '150',
    img: standardImg,
  },
  {
    id: 'business',
    name: 'tariff',
    title: 'Премиум',
    price: '250',
    img: businessImg,
  },
  {
    id: 'premium',
    name: 'tariff',
    title: 'Бизнес',
    price: '300',
    img: premiumImg,
  },
];

export const Tariffs = () => {
  const [currentTariff, setCurrentTariff] = useState(undefined);
  return (
    <div className={styles.tariff}>
      {tariffData.map((item) => {
        return <TariffItem {...item} key={item.id} />;
      })}
    </div>
  );
};
