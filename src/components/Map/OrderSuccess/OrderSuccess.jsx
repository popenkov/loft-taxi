import React from 'react';
import { PropTypes } from 'prop-types';

import { Button } from '../../UI/Button';
import styles from './OrderSuccess.module.scss';

export const OrderSuccess = ({ changeOrderStatus }) => {
  return (
    <div className={styles.container}>
      <h2>Заказ размещен</h2>
      <p>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
      <Button
        text="Сделать новый заказ"
        buttonType="primary"
        clickHandler={changeOrderStatus}
      />
    </div>
  );
};

OrderSuccess.propTypes = {
  changeOrderStatus: PropTypes.func.isRequired,
};
