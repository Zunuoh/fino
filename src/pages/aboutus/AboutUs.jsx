import React from "react";
import Header from "../../components/header/Header";
import AboutUsHeaderText from "./AboutUsHeaderText";
import GoalImage from "../../assets/goals.png"

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="aboutusContainer">
        <div>About us</div>
        <div className="aboutusHeaderContainer">
          <div style={aboutStyle}>We do things differently.......</div>
          <div style={aboutStyleOne}>
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

        <div className="aboutusMain">
          <div className="aboutusMainHeader">Our Goals</div>
          <div style={aboutContainer}>
              <div className="aboutusMainText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
              </div>
          <div style={imageDiv}>
            <img src={GoalImage} alt="" style={goalImage}/>
          </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

const aboutStyle = { flex: 7, fontSize: 35, fontWeight: "bold" };
const aboutStyleOne = { flex: 3, height: "10ch" };
const goalImage = { width:120, height:120 }
const imageDiv = { marginLeft:"20%" }
const aboutContainer = {display:"flex"}
export default AboutUs;
