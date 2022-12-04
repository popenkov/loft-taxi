import React from 'react';

import { ReactComponent as RoadLogo } from '../../assets/icons/road-logo.svg';
import { ReactComponent as TaxiLogo } from '../../assets/icons/taxi-logo.svg';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.LogoContainer}>
        <RoadLogo className={styles.roadLogo} />
        <TaxiLogo className={styles.taxiLogo} />
      </div>
    </aside>
  );
};

export default Sidebar;
