import React from "react";
import styles from "../styles/global.module.css";
export default function Branding() {
  return (
    <div className={styles.Branding}>
      <div className={styles.leftProduct}>
        <p>Smart Glass</p>
        <small>
          Glasses with supercomputer in it which helps to increasee your ablitiy
          to think lrem ipsum feqfwqf qf egq egqg qwg qwg.
        </small>
        <button>Buy now</button>
      </div>
      <div className={styles.rightProduct}>
        <img width="80%" height="80%" src="/images/product.jpg" />
      </div>
    </div>
  );
}
