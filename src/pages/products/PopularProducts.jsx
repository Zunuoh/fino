import React from "react";
import Collapsible from "../../components/collapsible/collapsible";
import ShirtOne from "../../assets/shirt1.jpeg";
import ShirtTwo from "../../assets/shirt2.jpg";
import { useState } from "react";

const popularProductsList = [
  { id: "0", image: { ShirtOne } },
  { id: "1", image: { ShirtOne } },
  { id: "2", image: { ShirtTwo } },
  { id: "3", image: { ShirtOne } },
  { id: "4", image: { ShirtOne } },
  { id: "5", image: { ShirtOne } },
];


const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState(popularProductsList);

  return (
    <div>
      <div className="productsHeaders">POPULAR PRODUCTS</div>

      <div className="similarProductsContainer">
       {popularProducts &&
          popularProducts.map((popularProduct) => {
            return (
              <div className="similarProducts">
                <img src={popularProduct.image} />
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
                <img src={popularProduct.image} />
              </div>
            );
          })}
        </div>
      </Collapsible>

     
    </div>
  );
};

export default PopularProducts;
