import React from "react";
import Collapsible from "../../components/collapsible/collapsible";
import { useState } from "react";

const popularProductsList = [
  { id: "0", image:require("../../assets/shirt1.jpeg") },
  { id: "1", image:require("../../assets/shirt2.jpg") },
  { id: "2", image:require("../../assets/shirt3.jpg") },
  { id: "3", image:require("../../assets/shirt1.jpeg") },
  { id: "4", image:require("../../assets/shirt2.jpg") },
  { id: "5", image:require("../../assets/shirt3.jpg") },
];


const PopularProducts = () => {
  const [popularProducts] = useState(popularProductsList);

  return (
    <div>
      <div className="productsHeaders">POPULAR PRODUCTS</div>

      <div className="similarProductsContainer">
       {popularProducts &&
          popularProducts.map((popularProduct) => {
            return (
              <div className="similarProducts">
                <img src={popularProduct.image} style={imageSize} alt=""/>
              </div>
            );
          })}
      </div>

      <Collapsible label="Load more popular products">
        <div className="similarProductsContainer">
        {popularProducts &&
          popularProducts.map((popularProduct) => {
            return (
              <div className="similarProducts">
                <img src={popularProduct.image} style={imageSize} alt=""/>
              </div>
            );
          })}
        </div>
      </Collapsible>

     
    </div>
  );
};

const imageSize = { width:"100%", height: 185}
export default PopularProducts;
