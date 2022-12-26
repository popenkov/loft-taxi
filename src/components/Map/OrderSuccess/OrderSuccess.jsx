import React from 'react';
import { PropTypes } from 'prop-types';

import { Button } from '../../UI/Button';
import styles from './OrderSuccess.module.scss';

export const OrderSuccess = ({ changeOrderStatus }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Заказ размещен</h2>
      <p className={styles.text}>
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </p>
      <div className={styles.buttonContainer}>
        <Button
          text="Сделать новый заказ"
          buttonType="primary"
          clickHandler={changeOrderStatus}
        />
      </div>
    </div>
  );
};

OrderSuccess.propTypes = {
  changeOrderStatus: PropTypes.func.isRequired,
};
