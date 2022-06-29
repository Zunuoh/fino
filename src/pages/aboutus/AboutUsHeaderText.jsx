import React from "react";

const AboutUsHeaderText = () => {
  return (
    <div>
      <div className="aboutusHeaderContainer">
        <div style={{ flex: 1, maxWidth: "25ch" }}>
          <div className="aboutusNumbers">400+</div>
          <div className="aboutusHeader">Projects completed</div>
          <div style={{ fontSize: 15 }}>
            We've helped build over 400 amazing
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: 90 }}>
          <div className="aboutusNumbers">600%</div>
          <div className="aboutusHeader">Return on investment</div>
          <div style={{ fontSize: 15 }}>
            Our customers have reported on average of -600% ROI.
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: 90 }}>
          <div className="aboutusNumbers">10k</div>
          <div className="aboutusHeader">Global downloads</div>
          <div style={{ fontSize: 15 }}>
            Our free UI kit has been downloaded over 100k times.
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: 90 }}>
          <div className="aboutusNumbers">200+</div>
          <div className="aboutusHeader">5-star reviews</div>
          <div style={{ fontSize: 15 }}>
            We're proud of our 5-star rating with over 200 reviews.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeaderText;
