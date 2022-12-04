import React, { useState } from 'react';
import { Select } from '../UI/FormElements/Select';

import styles from './OrderInfo.module.scss';
import { Tariffs } from '../Tariffs';
import { Button } from '../UI/Button';

const testAddresses = [
  { value: 'mira_street', label: 'Ул. Мира' },
  { value: 'bezymenskiy_street', label: 'Ул. Безыменского' },
  { value: 'lenin_avenue', label: 'Пр-т Ленина' },
];

export const OrderInfo = () => {
  const [formState, setFormState] = useState({
    from: '',
    to: '',
    tariff: '',
  });

  const handleFromChange = (option) => {
    setFormState({ ...formState, from: option.value });
  };

  const handleToChange = (option) => {
    setFormState({ ...formState, to: option.value });
  };

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // TODO  navigate(ROUTES.MAP);
    console.log('submitted');
  };

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.selectsContainer}>
          <Select options={testAddresses} handleChange={handleFromChange} />
          <Select options={testAddresses} handleChange={handleToChange} />
        </div>

        <div className={styles.bottomContainer}>
          <Tariffs />
          <Button
            text="Заказать"
            type="primary"
            clickHandler={handleSubmitClick}
          />
        </div>
      </form>
    </div>
  );
};
