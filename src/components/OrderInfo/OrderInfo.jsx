import { useActions } from '../../hooks/useActions';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Tariffs } from '../Tariffs';
import { Button } from '../UI/Button';
import { Select } from '../UI/FormElements/Select';
import styles from './OrderInfo.module.scss';
import { useSelector } from 'react-redux';
import { addressListMapper } from './utils';

export const OrderInfo = () => {
  const { getRouteData, getAdressListData } = useActions();
  const { isLoading: areAddressesLoading, addresses } = useSelector(
    (state) => state.route
  );

  const [formState, setFormState] = useState({
    address1: '',
    address2: '',
    tariff: '',
  });

  const [addressList, setAddressList] = useState([]);
  const [chosenAddress, setChosenAddress] = useState(null);

  useEffect(() => {
    getAdressListData();
  }, []);

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

  const handleFromChange = (option) => {
    setChosenAddress(option.label);
    setFormState({ ...formState, address1: option.label });
  };

  const handleToChange = (option) => {
    setChosenAddress(option.label);
    setFormState({ ...formState, address2: option.label });
  };

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    getRouteData(formState);
  };

  const handleFormSubmit = (data) => {
    getRouteData(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onChange',
  });

  return (
    <div className={styles.container}>
      {areAddressesLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className={styles.selectsContainer}>
            <Controller
              name="address1"
              control={control}
              rules={{
                required: 'Please select the address!',
              }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  error={error}
                  field={field}
                  placeholder=""
                  options={addressList}
                  isLoading={areAddressesLoading}
                />
              )}
            />
            <Controller
              name="address2"
              control={control}
              rules={{
                required: 'Please select the address!',
              }}
              render={({ field, fieldState: { error } }) => (
                <Select
                  error={error}
                  field={field}
                  placeholder=""
                  options={addressList}
                  isLoading={areAddressesLoading}
                />
              )}
            />
          </div>

          <div className={styles.bottomContainer}>
            <Tariffs />
            <Button text="Заказать" type="submit" buttonType="primary" />
          </div>
        </form>
      )}
    </div>
  );
};
