import { Header } from '../../Header';
import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Layout.styles.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
