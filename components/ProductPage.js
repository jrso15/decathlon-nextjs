import Header from "./Header";
import ProductDetails from "./ProductDetails";
import styles from "../styles/Home.module.scss";

const ProductPage = ({ information, stocks, reviews }) => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <ProductDetails
          information={information}
          stocks={stocks}
          reviews={reviews}
        />
      </main>
    </div>
  );
};

export default ProductPage;
