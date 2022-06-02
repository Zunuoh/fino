import React from 'react'
import GoogleImage from "../../assets/google.png"
import AmazonImage from "../../assets/amazon.png"
import EbayImage from "../../assets/ebay.png"
import AirbnbImage from "../../assets/airbnb.jpg"

const Companiescreen = () => {
    return (
        <div>
          <div className="companiesDiv">
          Trusted by 5,000+ companies worldwide
          </div>
          
          <div className="companyLogosContainer">
            <div >
            <img src={GoogleImage} alt="" className="companyLogos"/>
            </div>
            <div className="companyLogosDiv">
            <img src={AmazonImage} alt="" className="companyLogos"/>
            </div>
            <div className="companyLogosDiv">
            <img src={EbayImage} alt="" className="companyLogos"/>
            </div>
            <div className="companyLogosDiv">
            <img src={AirbnbImage} alt="" className="companyLogos"/>
            </div>
            <div className="companyLogosDiv">
            <img src={AirbnbImage} alt="" className="companyLogos"/>
            </div>
           
          </div>
        </div>
       
    )
}

export default Companiescreen;