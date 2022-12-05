import { PropTypes } from "prop-types";
import React from "react";

import styles from "./TariffItem.module.scss";

export const TariffItem = ({ name, title, price, img }) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="radio" name={name} />
      <div className={styles.tariffInput}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>
          <p className={styles.priceTitle}>Стоимость</p>
          <p className={styles.priceValue}>{price} ₽</p>
        </div>
        <img className={styles.image} src={img} />
      </div>
    </label>
  );
};

TariffItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
