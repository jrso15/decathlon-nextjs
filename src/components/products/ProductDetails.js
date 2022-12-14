import Image from "next/image";
import ProductReviews from "./ProductReviews";
import styles from "../../styles/ProductDetails.module.scss";

const ProductDetails = ({ information, stocks, reviews }) => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  let stocksValue =
    stocks && stocks.records.length > 0 ? stocks.records[0].fields.Stock : "";

  const stockLabel = () => {
    switch (true) {
      case stocksValue === 0:
        return <p className={styles.label}>No stock available</p>;

      case stocksValue === 1:
        return (
          <p className={styles.label}>Only {stocksValue} item available</p>
        );

      case stocksValue <= 10:
        return (
          <p className={styles.label}>Only {stocksValue} items available</p>
        );

      default:
        return <p className={styles.label}>In Stock</p>;
    }
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetails__image_wrapper}>
        <Image
          loader={loader}
          src={information?.fields?.pictures[0].url}
          alt={information?.fields?.Name}
          width={150}
          height={150}
          layout="responsive"
        />
      </div>

      <div className={styles.productDetails__information}>
        {stockLabel()}
        <h3 className={styles.brand}> {information?.fields?.Brand} </h3>

        <h1 className={styles.productName}> {information?.fields?.Name} </h1>

        <div className={styles.price}>
          <p>PHP {information?.fields?.Price}</p>
        </div>

        <div className={styles.stocks}>
          <p>
            Stocks: <span>{stocks?.records[0].fields?.Stock}</span>
          </p>
        </div>

        <div className={styles.description_wrapper}>
          <h3 className={styles.title}>Description</h3>
          <p className={styles.description}>
            {information?.fields?.Description}
          </p>
        </div>

        <button
          className={styles.btnAdd}
          disabled={stocksValue === 0 ? true : false}
        >
          add to cart
        </button>

        <ProductReviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductDetails;
