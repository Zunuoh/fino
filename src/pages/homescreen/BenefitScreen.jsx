import React from "react";
import QualityIcon from "../../assets/quality.png";
import LocationIcon from "../../assets/location.png";
import SupportIcon from "../../assets/support.png";

const BenefitScreen = () => {
  return (
    <div className="benefitsContainer">
      <div className="benefitsHeader">We provide the best benefits</div>
      <div className="benefitsHeader"> for you </div>

      <div className="iconContainer">
        <div className="iconDiv">
          <div>
            <div className="iconImageDiv">
              <img src={QualityIcon} alt="" className="iconImage" />
            </div>
            <div className="iconHeader">High quality</div>
            <div className="iconText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor
              consectetur adipiscing elit, sed do eiusmod tempor
            </div>
          </div>
        </div>

        <div className="iconDiv">
          <div>
            <div className="iconImageDiv">
              <img src={LocationIcon} alt="" className="iconImage" />
            </div>
            <div className="iconHeader">Free shipping</div>
            <div className="iconText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor
              consectetur adipiscing elit, sed do eiusmod tempor
            </div>
          </div>
        </div>

        <div className="iconDiv">
          <div>
            <div className="iconImageDiv">
              <img src={SupportIcon} alt="" className="iconImage" />
            </div>
            <div className="iconHeader">Support</div>
            <p className="iconText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor
              consectetur adipiscing elit,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitScreen;
