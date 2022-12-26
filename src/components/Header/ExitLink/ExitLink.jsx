import { NavLink } from '../../UI/NavLink';
import styles from './ExitLink.module.scss';

const ExitLink = ({ handleClick }) => {
  return (
    <div className={styles.logoutContainer}>
      <NavLink
        name="Выйти"
        color="secondary"
        handleClick={handleClick}
      ></NavLink>
    </div>
  );
};

export default ExitLink;
