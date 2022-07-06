import React from "react";
import { useState } from "react";
import { Button, Accordion } from "react-bootstrap";

const itemLists = [
  { id: "0", name: "shirt", desc: "hello world" },
  { id: "0", name: "shirt", desc: "hello world" },
  { id: "0", name: "shirt", desc: "hello world" },
  { id: "0", name: "shirt", desc: "hello world" },
];

const SimilarProducts = () => {
  const [items, setItems] = useState(itemLists);
  return (
    <div>
      <div className="productsHeaders">SIMILAR PRODUCTS</div>
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
            <Accordion.Header> See all similar products...</Accordion.Header>
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

export default SimilarProducts;
