import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getProductList } from "../pages/api/decathlon-api";
import styles from "../styles/ProductList.module.scss";

const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const ProductList = ({ productList }) => {
  console.log("listDDddd", productList);

  return (
    <div className={styles.productListContainer}>
      {productList.records?.map((product) => (
        <Link href={`product/${product.id}`} key={product.id}>
          <div className={styles.productListContainer__item}>
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
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
