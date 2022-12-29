import { NavLink } from '../../UI/NavLink';
import { ReactComponent as MapLogo } from '../../../assets/icons/map-icon.svg';

import styles from './ExitLink.module.scss';

const ExitLink = ({ handleClick }) => {
  return (
    <div className={styles.logoutContainer}>
      <span className={styles.icon}>
        <MapLogo />
      </span>
      <NavLink
        name="Выйти"
        color="secondary"
        handleClick={handleClick}
      ></NavLink>
    </div>
  );
};

export default ExitLink;
