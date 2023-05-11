import React from "react";
import Product from "./Product";

export default function ProductList({ productList }) {
  return productList.map((product, i) => {
    return <Product productDetails={product} key={i} />;
  });
}
