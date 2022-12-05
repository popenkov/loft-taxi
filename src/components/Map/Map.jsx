import React from "react";

import { Layout } from "../../components/Layouts/Layout";
import { OrderInfo } from "../OrderInfo";
import styles from "./Map.module.scss";
import { MapContainer } from "./MapContainer";

export const Map = () => {
  return (
    <Layout>
      <h1 className="visually-hidden">Map page</h1>
      <div className={styles.container}>
        <div className={styles.orderContainer}>
          <OrderInfo />
        </div>
        <MapContainer />
      </div>
    </Layout>
  );
};
