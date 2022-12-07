import { PropTypes } from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../UI/FormElements/Input';
import styles from './ProfileForm.module.scss';

export const ProfileForm = ({ state, handleChange }) => {
  const handleInputChange = (evt) => {
    handleChange(evt);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        {...register('cardName', {
          required: 'Обязательное поле',
          pattern: /^[A-Za-z\s]+$/i,
        })}
        helperText={
          errors.cardName && 'Имя должно содержать только латинские символы'
        }
        placeholder="Имя владельца"
        error={errors.cardName}
      />
      <Input
        {...register('cardNumber', {
          required: 'Обязательное поле',
          minLength: 16,
          maxLength: 16,
          pattern: /[0-9]/,
        })}
        helperText={errors.cardNumber && 'Номер карты содержит 16 чисел'}
        placeholder="Номер карты"
        error={errors.cardNumber}
      />

      <div className={styles.inputsContainer}>
        <Input
          {...register('expiryDate', {
            required: 'Обязательное поле',
            pattern: /[//]/,
            minLength: 5,
            maxLength: 5,
          })}
          helperText={errors.expiryDate && 'Дата должна быть в формате 00/00'}
          placeholder="MM/YY"
          error={errors.expiryDate}
        />

        <Input
          {...register('cvc', {
            required: 'Обязательное поле',
            minLength: 3,
            maxLength: 3,
            pattern: /[0-9]/,
          })}
          helperText={errors.cvc && 'Код CVC содержит 3 числа'}
          placeholder="CVC"
          error={errors.cvc}
        />
      </div>
    </form>
  );
};

// ProfileForm.propTypes = {
//   state: PropTypes.shape({
//     name: PropTypes.string,
//     cardNumber: PropTypes.string,
//     cardYear: PropTypes.string,
//     cardCVC: PropTypes.string,
//   }).isRequired,
//   handleChange: PropTypes.func.isRequired,
// };
