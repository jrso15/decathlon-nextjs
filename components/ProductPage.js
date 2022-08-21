import Header from "./Header";
import ProductDetails from "./ProductDetails";
import styles from "../styles/Home.module.scss";

const ProductPage = ({ information, stocks, reviews }) => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <ProductDetails
          information={information}
          stocks={stocks}
          reviews={reviews}
        />
      </main>
    </>
  );
};

export default ProductPage;
