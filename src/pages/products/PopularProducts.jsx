import React from "react";
import { Button } from "react-bootstrap";

const PopularProducts = () => {
  return (
    <div>
      <div className="productsHeaders">POPULAR PRODUCTS</div>
      <div className="similarProductsContainer">
        <div className="similarProducts">jfjf</div>
        <div className="similarProducts">jfjf</div>
      </div>

      <div className="productsButton">
        <Button
          style={{
            backgroundColor: "#FCD34D",
            borderRadius: 1,
            border: "none",
          }}
        >
          See all popular products...
        </Button>
      </div>
    </div>
  );
};

export default PopularProducts;
