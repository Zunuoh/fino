import React from "react";
import Collapsible from "../../components/collapsible/collapsible";
import ShirtOne from "../../assets/shirt1.jpeg";
import ShirtTwo from "../../assets/shirt2.jpg";
import { useState } from "react";

const similarProductsList = [
  { id: "0", image: { ShirtOne } },
  { id: "1", image: { ShirtOne } },
  { id: "2", image: { ShirtTwo } },
  { id: "3", image: { ShirtOne } },
  { id: "4", image: { ShirtOne } },
  { id: "5", image: { ShirtOne } },
];

const SimilarProducts = () => {
  const [similarProducts, setSimilarProducts] = useState(similarProductsList);
  return (
    <div>
      <div className="productsHeaders">SIMILAR PRODUCTS</div>

      <div className="similarProductsContainer">
        {similarProducts &&
          similarProducts.map((similarProduct) => {
            return (
              <div className="similarProducts">
                <img src={similarProduct.image} />
              </div>
            );
          })}
      </div>

      <div>
        <Collapsible label="Load more similar products">
          <div className="similarProductsContainer">
            {similarProducts &&
              similarProducts.map((similarProduct) => {
                return (
                  <div className="similarProducts">
                    <img src={similarProduct.image} />
                  </div>
                );
              })}
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default SimilarProducts;
