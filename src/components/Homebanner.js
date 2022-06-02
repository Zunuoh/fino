import React from "react";
import { Button } from "react-bootstrap";
import bannerChair from "../assets/bannerChair.png";

const Homebanner = () => {
  return (
    <div className="bannerContainer">
      <div className="leftBanner">
        <div className="leftBannerHeader">
          The Most Comfortable Chair For You
        </div>
        <div className="leftBannerText">
          Luxurious mannequin tailor etiquette purse Haute-couture valuable ddd
          ddd
        </div>
        <div className="bannerButton">
          <Button
            style={{
              backgroundColor: "#FCD34D",
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
            Shop now
          </Button>
        </div>
      </div>
      <div className="bannerImageContainer">
        <div className="bannerImageDiv">
          <img src={bannerChair} alt="" className="bannerImage" />
        </div>
      </div>

     
    </div>
  );
};

export default Homebanner;
