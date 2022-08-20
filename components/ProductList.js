import Image from "next/image";
import { useState, useEffect } from "react";
import { getProductList } from "../pages/api/decathlon-api";
import styles from "../styles/ProductList.module.scss";

const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const ProductList = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    let productList = await getProductList();
    setProductData(productList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data", productData);

  return (
    <div className={styles.productListContainer}>
      {productData.records?.map((product) => (
        <div className={styles.productListContainer__item} key={product.id}>
          <div className={styles.image_wrapper}>
            <Image
              loader={loader}
              src={product.fields.pictures[0].url}
              alt="logo"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.product_details}>
            <div className={styles.price}>
              <p>{product.fields.Price}</p>
            </div>
            <h4>{product.fields.Brand}</h4>
            <h3>{product.fields.Name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
