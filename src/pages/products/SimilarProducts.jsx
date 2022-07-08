import React from "react";
import Collapsible from "../../components/collapsible/collapsible";

const SimilarProducts = () => {
  return (
    <div>
      <div className="productsHeaders">SIMILAR PRODUCTS</div>
      <div className="similarProductsContainer">
        <div className="similarProducts">jfjf</div>
        <div className="similarProducts">jfjf</div>
        <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
          <div className="similarProducts">jfjf</div>
      </div>

      <div>
        <Collapsible label="Load more similar products">
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
    </div>
  );
};

export default SimilarProducts;
