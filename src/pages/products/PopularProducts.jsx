import React from "react";
import { Button, Accordion } from "react-bootstrap";
import ShirtOne from "../../assets/shirt1.jpeg";

const PopularProducts = () => {
  return (
    <div>
      <div className="productsHeaders">POPULAR PRODUCTS</div>
      <div className="similarProductsContainer">
        <div className="similarProducts">jfjf</div>
        <div className="similarProducts">jfjf</div>
      </div>

      <Accordion>
        <Accordion.Item eventKey="0">
          <div
            style={{
              backgroundColor: "#FCD34D",
              borderRadius: 1,
              border: "none",
            }}
          >
            {" "}
            <Accordion.Header> See all popular products...</Accordion.Header>
          </div>

          <Accordion.Body>
            <div className="similarProductsContainer">
              <div className="similarProducts">jfjf</div>
              <div className="similarProducts">jfjf</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PopularProducts;
