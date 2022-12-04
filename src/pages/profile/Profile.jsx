import React from 'react';

import { Layout } from '../../components/Layouts/Layout';
import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profileContainer}></div>
      </div>
    </Layout>
  );
};
