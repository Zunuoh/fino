import React from "react";
import bannerChair from "../../assets/bannerChair.png";
import ButtonComponent from "../../components/button/ButtonComponent";

const HomeBanner = () => {
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
          <ButtonComponent label="Shop now"/>
        </div>
      </div>
      <div className="bannerImageContainer">
        <div>
          <img src={bannerChair} alt="" className="bannerImage" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
