import React from "react";
import Header from "../../components/header/Header";
import AboutUsHeaderText from "./AboutUsHeaderText";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="aboutusContainer">
        <div>About us</div>
        <div className="aboutusHeaderContainer">
          <div style={{ flex: 7, fontSize: 35, fontWeight: "bold" }}>
            We do things differently.......
          </div>
          <div style={{ flex: 3, height: "10ch" }}>
            Learn more about the company, the team behind it and how we think
          </div>
        </div>

        <div className="aboutHeader">From our team</div>

        <div>
          <div className="aboutusText">
            Untitled truly values work-life balance. We work hard and deliver,
            but at the end of the day you can switch off.
          </div>
        </div>

        <div>
          <AboutUsHeaderText />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
