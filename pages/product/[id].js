import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  getProductList,
  getProductInformation,
  getStocks,
  getReviews,
} from "../api/decathlon-api";

export const getStaticPaths = async () => {
  const productDetails = await getProductList();

  const paths = productDetails.records?.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps(context) {
  let id = context.params.id;
  let information = await getProductInformation(id);

  const productId = information.fields.Id;
  let stocks = await getStocks(productId);
  let reviews = await getReviews(productId);

  return {
    props: { information, stocks, reviews },
  };
}

const ProductDetails = ({ information, stocks, reviews }) => {
  console.log("info", information);
  console.log("stocks", stocks);
  console.log("reviews", reviews);

  return (
    <>
      <ul>
        {/* <li>test {id}</li> */}
        {/* {productData.fields.Brand} */}
        {information.fields.Brand}
      </ul>
    </>
  );
};

export default ProductDetails;
