import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.NavWrapper}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
