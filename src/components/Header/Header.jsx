import { PropTypes } from "prop-types";
import React from "react";

import { ReactComponent as RoadLogo } from "../../assets/icons/road-logo.svg";
import { ReactComponent as TaxiLogo } from "../../assets/icons/taxi-logo.svg";
import { useAuth } from "../../context/AuthContext/AuthContext";
import styles from "./header.module.scss";
import NavLink from "./NavLink/NavLink";

const links = [
  {
    name: "Логин",
    href: "login",
  },
  {
    name: "Карта",
    href: "map",
  },
  {
    name: "Профиль",
    href: "profile",
  },
];

export const Header = ({ handleChangePage }) => {
  const { isLoggedIn, logOut } = useAuth();

  const handleNavigationClick = (page) => {
    console.log("page", page);
    handleChangePage(page);
  };

  const handleLogoutClick = () => {
    console.log("logOut");
    logOut();
    handleChangePage("home");
  };

  return (
    <header className={styles.header}>
      {/* TODO temporaly commented. Implementation with router dom */}
      {/* <Navigation /> */}
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <RoadLogo className={styles.roadLogo} />
          <TaxiLogo className={styles.taxiLogo} />
        </div>
        <div>
          {links.map((link) => {
            return (
              <NavLink
                {...link}
                color="secondary"
                key={link.name}
                handleClick={() => handleNavigationClick(link.href)}
              >
                {link.name}
              </NavLink>
            );
          })}
          {
            <NavLink
              name="Выйти"
              color="secondary"
              handleClick={handleLogoutClick}
            ></NavLink>
          }
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleChangePage: PropTypes.func,
};
