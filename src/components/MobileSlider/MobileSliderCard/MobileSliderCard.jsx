import React from 'react';

import styles from './MobileSliderCard.module.scss';

const MobileSliderCard = ({ id, img, title, text }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={id} className={styles.img} />
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default MobileSliderCard;
