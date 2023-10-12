import React from "react";
import styles from "../PagesBackgraund/PagesBackgraund.module.css";
import leaves from "../../assets/pictures/Leaves.png";
import banana from "../../assets/pictures/Banana.png";
import strawberry from "../../assets/pictures/Strawberry-Big.png";

const HomePagesBackground = () => {
  return (
    <div className={styles.background}>
      <div className={styles.leaves}>
        <img src={leaves} alt="leaves" />
      </div>
      <div className={styles.banana}>
        <img src={banana} alt="banana" />
      </div>
      <div className={styles.strawberry}>
        <img src={strawberry} alt="strawberry" />
      </div>
    </div>
  );
};
export default HomePagesBackground;
