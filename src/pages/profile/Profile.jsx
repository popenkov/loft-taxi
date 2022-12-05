import { ProfileForm } from '../../components/ProfileForm';
import { PaymentCard } from '../../components/UI/PaymentCard';
import React, { useState } from 'react';

import { Layout } from '../../components/Layouts/Layout';
import styles from './Profile.module.scss';
import { useAuth } from '../../context/AuthContext';

const mockDate = {
  date: '05/08',
  number: '5545 2300 3432 4521',
};

export const Profile = () => {
  const { isLoggedIn } = useAuth();
  const [formState, setFormState] = useState({
    name: 'ANTON POPENKOV',
    cardNumber: '5545 2300 3432 4521 ',
    cardYear: '05/08',
    cardCVC: '111',
  });

  const handleInputChange = (evt) => {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;
    setFormState({ ...formState, [inputName]: inputValue });
  };

  return (
    <Layout>
      <div className={styles.profile}>
        <div className={styles.container}>
          <h2 className={styles.title}>Профиль</h2>
          <p className={styles.subtitle}>Введите платежные данные</p>
          <div className={styles.info}>
            <div className={styles.formContainer}>
              <ProfileForm state={formState} handleChange={handleInputChange} />
            </div>
            <PaymentCard {...formState} onClick={() => alert(123)} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
