import React from "react";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navWrapper}>
      <Login />
      <Registration />
    </div>
  );
};
export default Navigation;
