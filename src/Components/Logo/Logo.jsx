import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImage } from "../../assets/pictures/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <LogoImage className={styles.logo}></LogoImage>
    </Link>
  );
};

export default Logo;
