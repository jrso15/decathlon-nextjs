const apiUrl = process.env.API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

const ROUTE = {
  products: "/product",
  stocks: "/stock?filterByFormula=ProductID+%3D+:productId",
  reviews: "/reviews?filterByFormula=ProductID+%3D+:productId",
};

async function apiCall(param) {
  try {
    const res = await fetch(`${apiUrl}${param}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    return await res.json();
  } catch (err) {
    return null;
  }
}

export async function getProductList() {
  let productList = await apiCall(ROUTE.products);
  return productList;
}

export async function getStocks(productId) {
  let stocks = await apiCall(ROUTE.stocks.replace(":productId", productId));
  return stocks;
}

export async function getReviews() {
  let reviewList = await apiCall(
    ROUTE.reviewList.replace(":productId", productId)
  );
  return reviewList;
}
