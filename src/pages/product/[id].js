import ProductPage from "../../components/products/ProductPage";
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
  let id = context.params.id; // supposed to be slug but no slug in api
  let information = await getProductInformation(id);

  const productId = information.fields?.Id;
  let stocks = await getStocks(productId);
  let reviews = await getReviews(productId);

  return {
    props: { information, stocks, reviews },
  };
}

const ProductDetails = ({ information, stocks, reviews }) => {
  return (
    <>
      <ProductPage
        information={information}
        stocks={stocks}
        reviews={reviews}
      />
    </>
  );
};

export default ProductDetails;
