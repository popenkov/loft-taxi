import { useActions } from '../../hooks/useActions';
import React, { useEffect, useState } from 'react';

import { Tariffs } from '../Tariffs';
import { Button } from '../UI/Button';
import { Select } from '../UI/FormElements/Select';
import styles from './OrderInfo.module.scss';
import { useSelector } from 'react-redux';
import { addressListMapper } from './utils';

export const OrderInfo = () => {
  const { getRouteData, getAdressListData } = useActions();
  const { isLoading, addresses } = useSelector((state) => state.route);

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

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form>
          <div className={styles.selectsContainer}>
            <Select options={addressList} handleChange={handleFromChange} />
            <Select options={addressList} handleChange={handleToChange} />
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
      )}
    </div>
  );
};
