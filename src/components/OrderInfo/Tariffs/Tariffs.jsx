import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { TariffItem } from '../../TariffItem';
import { Button } from '../../UI/Button';
import { tariffData } from '../tariffMock';
import styles from './Tariffs.module.scss';

const Tariffs = ({ control }) => {
  return (
    <div className={styles.bottomContainer}>
      <div className={styles.tariff}>
        {tariffData.map((item, index) => {
          return (
            <Controller
              key={item.id}
              name="tariff"
              control={control}
              rules={{
                required: 'Please select the desired Tariff',
              }}
              render={({ field, fieldState: { error } }) => (
                <TariffItem error={error} field={field} {...item} />
              )}
            />
          );
        })}
      </div>
      <Button text="Заказать" type="submit" buttonType="primary" />
    </div>
  );
};

export default Tariffs;
