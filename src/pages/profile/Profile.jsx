import { Button } from '../../components/UI/Button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Layout } from '../../components/Layouts/Layout';
import { ReactComponent as ShevronIcon } from '../../assets/icons/shevron-left.svg';
import { PaymentCard } from '../../components/UI/PaymentCard';
import { useActions } from '../../hooks/useActions';
import { Input } from '../../components/UI/FormElements/Input';
import styles from './Profile.module.scss';
import { ProfileCardSaved } from './ProfileCardSaved/ProfileCardSaved';

export const Profile = () => {
  const { getCardData, sendCardData } = useActions();
  const { isLoading, card, error } = useSelector((state) => state.payment);
  const [formState, setFormState] = useState(card ? card : {});
  const [isDataSaved, setIsDataSaved] = useState(false);

  useEffect(() => {
    getCardData();
  }, []);

  useEffect(() => {
    setFormState(card);
  }, [card]);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: card,
  });

  const handleFormSubmit = (data) => {
    sendCardData(data);
    setIsDataSaved(true);
  };

  const handleBackBtnClick = () => {};

  return (
    <Layout>
      {isLoading ? (
        'Идет загрузка'
      ) : (
        <div className={styles.profile}>
          {!isDataSaved || error ? (
            <div className={styles.container}>
              <h2 className={styles.title}>Профиль</h2>
              <p className={styles.subtitle}>
                <span className={styles.backBtn} onClick={handleBackBtnClick}>
                  <ShevronIcon />
                </span>
                Введите платежные данные
              </p>
              <div className={styles.info}>
                <div className={styles.formContainer}>
                  <form
                    id="hook-form"
                    onSubmit={handleSubmit(handleFormSubmit)}
                  >
                    <Input
                      {...register('cardName', {
                        required: 'Обязательное поле',
                        pattern: {
                          value: /^[A-Za-z\s]+$/i,
                          message: 'Только латинские буквы',
                        },
                      })}
                      placeholder="Имя владельца"
                      error={errors.cardName}
                      value={formState.cardName}
                      onChange={(e) => {
                        setFormState({
                          ...formState,
                          cardName: e.target.value,
                        });
                      }}
                    />

                    <Controller
                      control={control}
                      render={({ field: { onChange } }) => (
                        <InputMask
                          mask="9999 9999 9999 9999"
                          maskChar=" "
                          value={formState.cardNumber}
                          onChange={(e) => {
                            setFormState({
                              ...formState,
                              cardNumber: e.target.value,
                            });
                          }}
                        >
                          {(inputProps) => (
                            <Input
                              id="cardNumber"
                              placeholder="Номер карты"
                              error={errors.cardNumber}
                              {...inputProps}
                            />
                          )}
                        </InputMask>
                      )}
                      name="cardNumber"
                    />

                    <div className={styles.inputsContainer}>
                      <Input
                        {...register('expiryDate', {
                          required: 'Обязательное поле',
                          minLength: {
                            value: 5,
                            message: 'MM/YY',
                          },
                          pattern: {
                            value: /[//]/,
                            message: 'Введите дату в формате MM/YY',
                          },
                        })}
                        placeholder="MM/YY"
                        error={errors.expiryDate}
                        value={formState.expiryDate}
                        onChange={(e) => {
                          setFormState({
                            ...formState,
                            expiryDate: e.target.value,
                          });
                        }}
                      />

                      <Input
                        {...register('cvc', {
                          required: 'Обязательное поле',
                          minLength: {
                            value: 3,
                            message: 'Код CVC состоит из 3 чисел',
                          },
                          maxLength: {
                            value: 3,
                            message: 'Код CVC состоит из 3 чисел',
                          },
                          pattern: {
                            value: /[0-9]/,
                            message: 'Код CVC состоит из 3 чисел',
                          },
                        })}
                        placeholder="CVC"
                        error={errors.cvc}
                        value={formState.cvc}
                        onChange={(e) => {
                          setFormState({
                            ...formState,
                            cvc: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </form>
                </div>
                <PaymentCard {...formState} />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  text="Сохранить"
                  type="submit"
                  form="hook-form"
                  buttonType="primary"
                />
              </div>
            </div>
          ) : (
            <ProfileCardSaved />
          )}
        </div>
      )}
    </Layout>
  );
};
