import Head from "../components/Head";
import Header from "../components/header";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head title="Decathlon Sports Philippines | Buy Sports Products Online Now..." />

      <Header />

      <main className={styles.main}>
        <ProductList />
      </main>
    </div>
  );
};

export default Home;
