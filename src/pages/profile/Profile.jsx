import { Button } from '../../components/UI/Button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Layout } from '../../components/Layouts/Layout';

import { PaymentCard } from '../../components/UI/PaymentCard';
import { useActions } from '../../hooks/useActions';
import { Input } from '../../components/UI/FormElements/Input';
import styles from './Profile.module.scss';

export const Profile = () => {
  const { getCardData, sendCardData } = useActions();
  const { isLoading, card } = useSelector((state) => state.payment);
  const [formState, setFormState] = useState({});

  useEffect(() => {
    getCardData();
  }, []);

  useEffect(() => {
    setFormState(card);
  }, [card]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: card,
  });

  const handleFormSubmit = (data) => {
    setFormState(data);
    sendCardData(data);
  };

  return (
    <Layout>
      {isLoading ? (
        'Идет загрузка'
      ) : (
        <div className={styles.profile}>
          <div className={styles.container}>
            <h2 className={styles.title}>Профиль</h2>
            <p className={styles.subtitle}>Введите платежные данные</p>
            <div className={styles.info}>
              <div className={styles.formContainer}>
                <form id="hook-form" onSubmit={handleSubmit(handleFormSubmit)}>
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
                  />
                  <Input
                    {...register('cardNumber', {
                      required: 'Обязательное поле',
                      minLength: {
                        value: 16,
                        message: 'Номер карты содержит 16 чисел',
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: 'Только числа',
                      },
                    })}
                    placeholder="Номер карты"
                    error={errors.cardNumber}
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
                    />
                  </div>
                </form>
              </div>
              <PaymentCard {...formState} />
            </div>
            <Button
              text="Сохранить"
              type="submit"
              form="hook-form"
              buttonType="primary"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};
