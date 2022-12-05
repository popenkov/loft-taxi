import React from "react";

import styles from "./NavLink.module.scss";

function NavLink({ name, href, handleClick }) {
  const handleLinkClick = () => {
    handleClick();
  };
  return (
    <button className={styles.link} onClick={handleLinkClick}>
      {name}
    </button>
  );
}

export default NavLink;
