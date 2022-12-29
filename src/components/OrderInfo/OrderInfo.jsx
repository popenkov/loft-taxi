import { useActions } from '../../hooks/useActions';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PropTypes } from 'prop-types';

import styles from './OrderInfo.module.scss';
import { useSelector } from 'react-redux';
import Tariffs from './Tariffs/Tariffs';
import Addresses from './Addresses/Addresses';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../constants/constants';

export const OrderInfo = ({ changeOrderStatus }) => {
  const { getRouteData } = useActions();
  // TODO no server
  // const { isLoading: areAddressesLoading, error } = useSelector(
  //   (state) => state.route
  // );

  const areAddressesLoading = false;
  const error = false;

  const { getAdressListData } = useActions();

  const isMobile = useMediaQuery(BREAKPOINTS.TABLET);

  useEffect(() => {
    getAdressListData();
  }, []);

  const handleFormSubmit = (data) => {
    getRouteData(data);
    changeOrderStatus();
  };

  const { handleSubmit, getValues, watch, formState, control } = useForm({
    mode: 'onChange',
  });

  const isFirstAddressChosen = watch('address1');
  const isSecondAddressChosen = watch('address2');
  const areAddressesChosen =
    Boolean(isFirstAddressChosen) && Boolean(isSecondAddressChosen);

  const areTariffsShown = !isMobile || (isMobile && areAddressesChosen);

  return (
    <div className={styles.container}>
      {areAddressesLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Network error...</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <Addresses getAdressListData={getAdressListData} control={control} />
          {areTariffsShown && <Tariffs control={control} />}
        </form>
      )}
    </div>
  );
};

OrderInfo.propTypes = {
  changeOrderStatus: PropTypes.func.isRequired,
};
