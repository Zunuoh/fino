import React from "react";
import Header from "../Header";
import Homebanner from "./Homebanner";
import Companiescreen from "../homescreen/Companiescreen";  
import Benefitscreen from "../homescreen/Benefitscreen";

const Homescreen = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="homebannerContainer">
        <Homebanner />
      </div>

      <div className="companiesscreenContainer">
          <Companiescreen/>
      </div>

      <div style={{backgroundColor:"#FFFBEB", height:"80%"}}>
       <Benefitscreen/>
      </div>
    </div>
  );
};

export default Homescreen;
