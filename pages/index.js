import Head from "next/head";
import Branding from "../components/Branding";
import Header from "../components/Header";
import Products from "../components/Products";
import Section from "../components/Section";
import styles from "../styles/global.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev tools</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Section>
        <Branding></Branding>
      </Section>
      <Section title="New Products">
        <Products></Products>
      </Section>

      <style jsx global>{`
        html,
        body {
          padding: 0px;
          margin: 0px;
          font-family: Montserrat;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
