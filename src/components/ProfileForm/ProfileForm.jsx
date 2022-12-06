import { PropTypes } from 'prop-types';
import React from 'react';

import { Input } from '../UI/FormElements/Input';
import styles from './ProfileForm.module.scss';

export const ProfileForm = ({ state, handleChange }) => {
  const handleInputChange = (evt) => {
    handleChange(evt);
  };

  return (
    <form>
      <Input
        label={'Имя владельца'}
        id="cardName"
        value={state.cardName}
        type="text"
        name="cardName"
        changeHandler={handleInputChange}
      />
      <Input
        label={'Номер карты'}
        id="cardNumber"
        value={state.cardNumber}
        type="text"
        name="cardNumber"
        changeHandler={handleInputChange}
      />
      <div className={styles.inputsContainer}>
        <Input
          label={'MM/YY'}
          id="expiryDate"
          value={state.expiryDate}
          type="text"
          name="expiryDate"
          changeHandler={handleInputChange}
        />
        <Input
          label={'CVC'}
          id="cvc"
          value={state.cvc}
          type="text"
          name="cvc"
          changeHandler={handleInputChange}
        />
      </div>
    </form>
  );
};

ProfileForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string,
    cardNumber: PropTypes.string,
    cardYear: PropTypes.string,
    cardCVC: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
