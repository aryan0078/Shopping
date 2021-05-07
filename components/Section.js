import React from "react";
import styles from "../styles/global.module.css";
import Head from "next/head";
export default function Section(props) {
  return (
    <div className={styles.section}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <p className={styles.sectionTitle}>{props.title}</p>
      {props.children}
    </div>
  );
}
