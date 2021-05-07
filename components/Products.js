import React, { Component } from "react";
import styles from "../styles/global.module.css";
import ProductsCard from "./ProductsCard";
import Link from "next/link";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "fffddc",
          name: "Product",
          price: 12.55,
          description:
            "lrem aoievnaei vioaenvoien vianvoienv apienvoaienv piaenvpaeivnpiaevn apeivnpae vnpaievnp aeivnpie anv painvpi eanvpae ivnaep vnpaiev nepainv piaenv piaenvpi enavp ianepvi eanpivnea pvinpaeinvpae nivpeainv paeinv",
          quantity: 0,
          stock: 4,
          tag: "Blender",
          image: "/images/ar.svg",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.productsContainer}>
        {this.state.products.map((product) => (
          <Link href={"/product/" + product.id}>
            <a style={{ textDecoration: "none", color: "black" }}>
              <ProductsCard data={product}></ProductsCard>
            </a>
          </Link>
        ))}
      </div>
    );
  }
}
