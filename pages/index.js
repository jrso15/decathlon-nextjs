import HeadSeoTags from "../components/HeadSeoTags";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
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
    <>
      <div className={styles.container} data-testid="container">
        <HeadSeoTags title="Decathlon Sports Philippines | Buy Sports Products Online Now..." />

        <Header />

        <main className={styles.main}>
          <ProductList productList={productList} />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
