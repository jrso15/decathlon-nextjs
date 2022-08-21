import Head from "../components/Head";
import Header from "../components/header";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.scss";
import { getProductList } from "../pages/api/decathlon-api";

export const getStaticProps = async () => {
  let productList = await getProductList();

  return {
    props: {
      productList,
    },
  };
};

const Home = ({ productList }) => {
  return (
    <div className={styles.container}>
      <Head title="Decathlon Sports Philippines | Buy Sports Products Online Now..." />

      <Header />

      <main className={styles.main}>
        <ProductList productList={productList} />
      </main>
    </div>
  );
};

export default Home;
