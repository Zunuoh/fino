import React from "react";
import Header from "./Header";
import Homebanner from "./Homebanner";
import Companiescreen from "./Companiescreen";  

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

      <div style={{backgroundColor:"#FFFBEB"}}>
        dddj
      </div>
    </div>
  );
};

export default Homescreen;
