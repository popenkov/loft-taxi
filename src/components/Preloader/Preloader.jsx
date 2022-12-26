import { useEffect, useRef } from 'react';
import { ReactComponent as RoadLogo } from '../../assets/icons/road-logo.svg';
import { ReactComponent as TaxiLogo } from '../../assets/icons/taxi-logo.svg';
import styles from './Preloader.module.scss';

const Preloader = () => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  let count = 1;
  const countFinishValue = 100;
  let loaderId;

  const loadHandler = () => {
    if (count <= countFinishValue) {
      if (logoRef?.current) {
        logoRef.current.style.opacity = `${0.01 * count}`;
      }
      count++;
    } else {
      clearInterval(loaderId);
      loaderRef.current.style.opacity = '0';
      loaderRef.current.style.visibility = 'hidden';
    }
  };

  useEffect(() => {
    if (loaderRef.current) {
      loaderId = setInterval(loadHandler, 45);
    }
  }, [loaderRef]);

  return (
    <div className={styles.preloader} ref={loaderRef}>
      <div className={styles.logoContainer} ref={logoRef}>
        <RoadLogo className={styles.roadLogo} />
        <TaxiLogo className={styles.taxiLogo} />
      </div>
    </div>
  );
};

export default Preloader;
