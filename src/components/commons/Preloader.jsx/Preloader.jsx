import React from "react";
import styles from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div>
    
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
