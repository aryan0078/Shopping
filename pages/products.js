import React, { Component } from "react";
import Products from "../components/Products";
import Section from "../components/Section";
import styles from "../styles/global.module.css";
export default class products extends Component {
  render() {
    return (
      <div className={styles.productsPage}>
        <Section>
          <Products></Products>
        </Section>
      </div>
    );
  }
}
