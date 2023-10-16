import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Circles color="#fc842d" height={60} width={60} />
    </div>
  );
};

export default Loader;