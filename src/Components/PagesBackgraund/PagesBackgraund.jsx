import React from "react";
import styles from "../PagesBackgraund/PagesBackgraund.module.css";
import fruit from "../../assets/pictures/Frame 1.png";

const HomePagesBackground = ({ children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.fruit}>
        <img src={fruit} alt="fruit" />
      </div>
      {children}
    </div>
  );
};
export default HomePagesBackground;
