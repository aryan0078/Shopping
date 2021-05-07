import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/global.module.css";
import Head from "next/head";
import Header from "../components/Header";
import { cart, Remove } from "../components/cartStystem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { uid } from "uid";
import { CreateOrder } from "../apis/CreateOrder";
export default function Cart() {
  const [loading, setloading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [products, setProduct] = useState([]);
  const [Total, setTotal] = useState(0);
  const [hover, sethover] = useState(0);
  useEffect(() => {
    if (cart().items) {
      setTotal(Math.round((cart().total + Number.EPSILON) * 100) / 100);

      setProduct(cart().items);
    }
  }, [Total]);
  const removeFromCart = (product) => {
    let _ = Remove(product);
    setProduct(_.items);
    setTotal(_.total);
  };
  const handleBooking = async () => {
    let res = await CreateOrder({
      amount: 304,
      orderid: uid(),
      siteAddress: "Dev Tools",
    });

    let options = await res.json();
    options = { ...options, key: "rzp_test_ScCgguvPf890Jo" };
    console.log(options);
    let rzp = new window.Razorpay(options);
    rzp.open();
  };
  const handleBookingCheckout = () => {
    var options = {
      key_id: "rzp_test_ScCgguvPf890Jo",
      amount: 100,
      currency: "INR",
      name: "Dev Tools",
      description: "Booking Request amount for Devtools",
      image: "https://example.com/your_logo",
      order_id: "fgssdhdshshsdh",
      handler: paymentResponse,
      prefill: {
        name: "Aryan ",
        email: "aryan8931080555@gmail.com",
        contact: "+919415701159",
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: "#FFFF00",
      },
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className={styles.productDetailPageContainer}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Head>
      <Header></Header>
      <div className={styles.detailCard}>
        <p>Cart</p>
        {products.length === 0 ? (
          <p
            style={{ margin: "50px", fontSize: "medium", alignSelf: "center" }}
          >
            Your cart is empty
          </p>
        ) : (
          <div className={styles.cartProducts}>
            {products.map((product) => (
              <div
                className={styles.cartItem}
                onMouseLeave={() => sethover(0)}
                onMouseOver={() => sethover(product.id)}
              >
                <small>{product.quantity + " x"}</small>
                <p style={{ alignSelf: "center" }}>{product.name}</p>

                {hover == product.id ? (
                  <div
                    style={{ width: "15px", height: "15px" }}
                    onClick={() => removeFromCart(product)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </div>
                ) : (
                  <small>{product.price}</small>
                )}
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontSize: "medium",
              fontWeight: "400",
              alignSelf: "center",
            }}
          >
            Total:
          </p>
          <p style={{ margin: "0px" }}>$ {Total}</p>
        </div>

        {products.length === 0 ? null : (
          <button onClick={handleBooking}>Procced</button>
        )}
      </div>
    </div>
  );
}
