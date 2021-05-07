import React from "react";
import styles from "../styles/global.module.css";
import Image from "next/image";
export default function ProductsCard(props) {
  return (
    <div className={styles.prouctsCard}>
      <Image width="100%" height="100%" src="/images/ar.svg"></Image>
      <p style={{ alignSelf: "flex-start" }}>{"$ " + props.data.price}</p>
      <div className={styles.prouctsCardDetail}>
        <p style={{ textOverflow: "clip" }}>{props.data.name}</p>
        <small>{props.data.tags}</small>
      </div>
    </div>
  );
}
