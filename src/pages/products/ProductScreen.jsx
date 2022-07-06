import React from "react";
import Header from "../../components/header/Header";
import PopularProducts from "./PopularProducts";
import SimilarProducts from "./SimilarProducts";

const ProductScreen = () => {
  return (
    <div>
      <Header />
      <div className="productContainer">
        <div className="productHeader">PRODUCT SCREEN</div>

        <SimilarProducts />

        <div style={{ marginTop: 30 }}>
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
