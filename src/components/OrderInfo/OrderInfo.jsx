import { useActions } from '../../hooks/useActions';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PropTypes } from 'prop-types';

import { Button } from '../UI/Button';
import { Select } from '../UI/FormElements/Select';
import styles from './OrderInfo.module.scss';
import { useSelector } from 'react-redux';
import { addressListMapper } from './utils';
import { tariffData } from './tariffMock';
import { TariffItem } from '../TariffItem';

export const OrderInfo = ({ changeOrderStatus }) => {
  const { getRouteData, getAdressListData } = useActions();
  const { isLoading: areAddressesLoading, addresses } = useSelector(
    (state) => state.route
  );

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

  const handleFormSubmit = (data) => {
    getRouteData(data);
    changeOrderStatus();
  };

  const handleSelectChange = (option) => {
    setChosenAddress(option);
  };

  const {
    handleSubmit,

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
        </form>
      )}
    </div>
  );
};

OrderInfo.propTypes = {
  changeOrderStatus: PropTypes.func.isRequired,
};
