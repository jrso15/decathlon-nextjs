import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ProductList.module.scss";

const ProductList = ({ productList }) => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={styles.productListContainer}>
      {productList && productList.records && productList.records.length > 0 ? (
        productList.records.map((product) => (
          <Link href={`product/${product.id}`} key={product.id}>
            <div className={styles.productListContainer__item}>
              <div className={styles.image_wrapper}>
                <Image
                  loader={loader}
                  src={product.fields.pictures[0].url}
                  alt={product.fields.Name}
                  width={150}
                  height={150}
                />
              </div>

              <div className={styles.details}>
                <div className={styles.price}>
                  <p>PHP {product.fields.Price}</p>
                </div>
                <h3 className={styles.brand}>{product.fields.Brand}</h3>
                <h2 className={styles.productName}>{product.fields.Name}</h2>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h3> No products available! </h3>
      )}
    </div>
  );
};

export default ProductList;
