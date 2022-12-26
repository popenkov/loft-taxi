import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/UI/Button';

import styles from '../Profile.module.scss';

export const ProfileCardSaved = () => {
  return (
    <div className={styles.cardSavedContainer}>
      <h2 className={styles.title}>Профиль</h2>
      <p className={styles.subtitle}>
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </p>
      <Link to="/map">
        <Button text="Перейти на карту" buttonType="primary" />
      </Link>
    </div>
  );
};
