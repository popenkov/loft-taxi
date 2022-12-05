import { PropTypes } from "prop-types";
import React from "react";

import { ReactComponent as Contacts } from "../../../assets/icons/contacts.svg";
import { ReactComponent as RoadLogo } from "../../../assets/icons/road-logo.svg";
import styles from "./PaymentCard.module.scss";

export const PaymentCard = ({ cardYear, cardNumber }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <RoadLogo className={styles.logo} />
        <p className={styles.date}>{cardYear}</p>
      </div>
      <p className={styles.number}>{cardNumber}</p>
      <div className={styles.bottom}>
        <Contacts className={styles.contactsLogo} />
        <div className={styles.cardLogo}></div>
      </div>
    </div>
  );
};

PaymentCard.propTypes = {
  cardYear: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
};
