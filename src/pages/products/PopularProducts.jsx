import React from "react";
import Collapsible from "../../components/collapsible/collapsible";

const PopularProducts = () => {
  return (
    <div>
      <div className="productsHeaders">POPULAR PRODUCTS</div>
      <div className="similarProductsContainer">
        <div className="similarProducts">jfjf</div>
        <div className="similarProducts">jfjf</div>
        <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
      </div>

      <Collapsible label="Load more popular products">
        <div className="similarProductsContainer">
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
        </div>
      </Collapsible>

     
    </div>
  );
};

export default PopularProducts;
