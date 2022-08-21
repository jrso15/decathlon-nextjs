import Image from "next/image";
import ProductReviews from "./ProductReviews";
import styles from "../styles/ProductDetails.module.scss";

const ProductDetails = ({ information, stocks, reviews }) => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const stockLabel = () => {
    const stocksValue = stocks?.records[0]?.fields.Stock;

    const label =
      stocksValue === 0
        ? "No stock available"
        : stocksValue <= 10
        ? `Only ${stocksValue} items available`
        : stocksValue > 10
        ? "In Stock"
        : null;

    return label;
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
        <h3 className={styles.brand}> {information?.fields?.Brand} </h3>

        <h1 className={styles.productName}> {information?.fields?.Name} </h1>

        <div className={styles.price}>
          <p>PHP {information?.fields?.Price}</p>
        </div>

        <div className={styles.stocks}>
          <p className={styles.label}>{stockLabel()}</p>
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

        <ProductReviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductDetails;
