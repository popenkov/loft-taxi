import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/useActions';
import { Select } from '../../UI/FormElements/Select';
import { addressListMapper } from '../utils';

import styles from './Addresses.module.scss';

const Addresses = ({ control }) => {
  // TODO No server
  // const { addresses, areAddressesLoading } = useSelector(
  //   (state) => state.route
  // );

  const addresses = [
    'Улица Горького',
    'Проспект строителей',
    'Улица Мира',
    '1-ый проезд',
  ];

  const areAddressesLoading = false;

  const [addressList, setAddressList] = useState([]);
  const [chosenAddress, setChosenAddress] = useState(null);

  useEffect(() => {
    let filterredAddresses = addresses;
    if (Boolean(chosenAddress)) {
      filterredAddresses = addresses.filter((item) => {
        return item !== chosenAddress;
      });
    }
    const mappedAdresses = addressListMapper(filterredAddresses);
    setAddressList(mappedAdresses);
  }, [addresses, chosenAddress]);

  const handleSelectChange = (option) => {
    setChosenAddress(option);
  };
  return (
    <div className={styles.selectsContainer}>
      <Controller
        name="address1"
        control={control}
        rules={{
          required: 'Пожалуйста, выберите точку отправление',
        }}
        render={({ field, fieldState: { error } }) => (
          <Select
            error={error}
            field={field}
            placeholder=""
            options={addressList}
            isLoading={areAddressesLoading}
            getSelectValue={handleSelectChange}
          />
        )}
      />
      <Controller
        name="address2"
        control={control}
        rules={{
          required: 'Пожалуйста, выберите точку прибытия',
        }}
        render={({ field, fieldState: { error } }) => (
          <Select
            error={error}
            field={field}
            placeholder=""
            options={addressList}
            isLoading={areAddressesLoading}
            getSelectValue={handleSelectChange}
          />
        )}
      />
    </div>
  );
};

export default Addresses;
