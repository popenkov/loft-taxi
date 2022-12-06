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
        id="name"
        value={state.cardName}
        type="name"
        name="name"
        changeHandler={handleInputChange}
      />
      <Input
        label={'Номер карты'}
        id="cardNumber"
        value={state.cardNumber}
        type="cardNumber"
        name="cardNumber"
        changeHandler={handleInputChange}
      />
      <div className={styles.inputsContainer}>
        <Input
          label={'MM/YY'}
          id="cardYear"
          value={state.expiryDate}
          type="cardYear"
          name="cardYear"
          changeHandler={handleInputChange}
        />
        <Input
          label={'CVC'}
          id="cardCVC"
          value={state.cvc}
          type="cardCVC"
          name="cardCVC"
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
