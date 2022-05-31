import React from "react";
import Header from "./Header";
import Homebanner from "./Homebanner";

const Homescreen = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="homescreenContainer">
        <Homebanner />
      </div>

      <div></div>
    </div>
  );
};

export default Homescreen;
