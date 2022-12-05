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
        value={state.name}
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
          value={state.cardYear}
          type="cardYear"
          name="cardYear"
          changeHandler={handleInputChange}
        />
        <Input
          label={'CVC'}
          id="cardCVC"
          value={state.cardCVC}
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
    name: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardYear: PropTypes.string.isRequired,
    cardCVC: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
