import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/global.module.css";
import Head from "next/head";
import Header from "./Header";
import Notifications, { notify } from "react-notify-toast";
import { Add, cart, TotalUpdate } from "./cartStystem";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
export default function ProductDetail() {
  const [loading, setloading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    id: "fffddc",
    name: "Product",
    price: 12.55,
    description:
      "lrem aoievnaei vioaenvoien vianvoienv apienvoaienv piaenvpaeivnpiaevn apeivnpae vnpaievnp aeivnpie anv painvpi eanvpae ivnaep vnpaiev nepainv piaenv piaenvpi enavp ianepvi eanpivnea pvinpaeinvpae nivpeainv paeinv",
    quantity: 1,
    stock: 4,
    tag: "Blender",
    image: "/images/ar.svg",
  });
  const increaseQunatitiy = () => {
    if (quantity > product.stock) {
      notify.show("This is our maximum quantity of this product!", "warning");
      return;
    }
    let payload = product;
    payload.quantity++;

    setQuantity(quantity + 1);
    setProduct(payload);
  };
  const decreaseQunatitiy = () => {
    if (product.quantity < 0) {
      return;
    }
    let payload = product;
    payload.quantity--;
    setQuantity(quantity - 1);
    setProduct(payload);
  };
  const addProduct = () => {
    if (quantity === 0) {
      notify.show("Please increase quantity", "warning");
    }
    setloading(true);
    setTimeout(() => {
      notify.show("Product added 🎉", "success");
      Add(product);
      TotalUpdate(quantity * product.price);
      setQuantity(1);
      let payload = product;
      payload.quantity = 1;
      setProduct(payload);
    }, 2000);
    setloading(false);
  };
  return (
    <div className={styles.productDetailPageContainer}>
      <Notifications></Notifications>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <div className={styles.detailCard}>
        <Image width="100%" height="100%" src={"/images/ar.svg"}></Image>
        <p>{product.name}</p>
        <small className={styles.detailtag}>{product.tag}</small>
        <div className={styles.detailPriceRow}>
          <div className={styles.quantity}>
            <small
              style={{ cursor: "pointer" }}
              onClick={() => increaseQunatitiy()}
            >
              +
            </small>
            <small>{quantity}</small>
            <small
              style={{ cursor: "pointer" }}
              onClick={() => decreaseQunatitiy()}
            >
              -
            </small>
          </div>
          <p>{product.price * quantity}</p>
        </div>
        <div className={styles.aboutProduct}>
          <p style={{ fontWeight: "bolder", fontFamily: "Montserrat" }}>
            About The Product
          </p>
          <p>{product.description}</p>
        </div>
        <button onClick={addProduct}>
          {loading ? (
            <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </div>
  );
}
