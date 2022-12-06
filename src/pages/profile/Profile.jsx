import { Button } from '../../components/UI/Button';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Layout } from '../../components/Layouts/Layout';
import { ProfileForm } from '../../components/ProfileForm';
import { PaymentCard } from '../../components/UI/PaymentCard';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
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

  const handleInputChange = (evt) => {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;

    console.log(formState, inputName, inputValue);
    setFormState({ ...formState, [inputName]: inputValue });
  };

  const handleSubmitClick = () => {
    sendCardData(formState);
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
                <ProfileForm
                  state={formState}
                  handleChange={handleInputChange}
                />
              </div>
              <PaymentCard {...formState} />
            </div>
            <Button
              text="Сохранить"
              type="primary"
              clickHandler={handleSubmitClick}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};
