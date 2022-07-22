import React from "react";
import Collapsible from "../../components/collapsible/collapsible";
import { useState } from "react";

const similarProductsList = [
  { id: "0", image:require("../../assets/shirt3.jpg") },
  { id: "1", image:require("../../assets/shirt1.jpeg") },
  { id: "2", image:require("../../assets/shirt2.jpg") },
  { id: "3", image:require("../../assets/shirt3.jpg") },
  { id: "4", image:require("../../assets/shirt2.jpg") },
  { id: "5", image:require("../../assets/shirt1.jpeg") },
];

const SimilarProducts = () => {
  const [similarProducts] = useState(similarProductsList);
  return (
    <div>
      <div className="productsHeaders">SIMILAR PRODUCTS</div>

      <div className="similarProductsContainer">
        {similarProducts &&
          similarProducts.map((similarProduct) => {
            return (
              <div className="similarProducts">
                <img src={similarProduct.image} style={imageSize} alt=""/>
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
                    <img src={similarProduct.image} style={imageSize} alt=""/>
                  </div>
                );
              })}
          </div>
        </Collapsible>
      </div>
    </div>
  );
};


const imageSize = { width:"100%", height: 185}

export default SimilarProducts;
