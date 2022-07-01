import React from "react";
import Header from "../../components/header/Header";
import Homebanner from "./HomeBanner";
import CompanyScreen from "./CompanyScreen";
import BenefitScreen from "./BenefitScreen";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="homebannerContainer">
        <Homebanner />
      </div>

      <div className="companiesscreenContainer">
        <CompanyScreen />
      </div>

      <div style={{ backgroundColor: "#FFFBEB", height: "80%" }}>
        <BenefitScreen />
      </div>
    </div>
  );
};

export default HomeScreen;
