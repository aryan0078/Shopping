import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/global.module.css";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { cart } from "./cartStystem";
export default function Header() {
  const [cartItems, setcartItems] = useState(0);
  useEffect(() => {
    setInterval(() => {
      if (cart().items) {
        setcartItems(cart().items.length);
      }
    }, 2000);
  }, [cartItems]);
  return (
    <div className={styles.header}>
      <Link href="/">
        <a style={{ textDecoration: "none", color: "black" }}>
          <p className={styles.title}>
            <FontAwesomeIcon
              style={{ height: "30px", width: "40px", margin: "3px" }}
              icon={faDev}
            ></FontAwesomeIcon>
            Dev Tools
          </p>
        </a>
      </Link>
      <div className={styles.sidebar}>
        <Link href="/">
          <a style={{ textDecoration: "none", color: "black" }}>
            <p>Home</p>
          </a>
        </Link>
        <Link href="/products">
          <a style={{ textDecoration: "none", color: "black" }}>
            <p>Products</p>
          </a>
        </Link>
        <Link href="/cart">
          <a style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.shoppingCart}>
              <FontAwesomeIcon
                style={{ height: "20px", width: "20px" }}
                icon={faCaretSquareDown}
              ></FontAwesomeIcon>
              {cartItems === 0 ? null : (
                <small className={styles.badge}>{cartItems}</small>
              )}
            </div>
          </a>
        </Link>
        <Link href="mailto:aryan8931080555@gmail.com">
          <a style={{ textDecoration: "none", color: "black" }}>
            <p>Contact</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
