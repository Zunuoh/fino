import React from "react";
import Header from "../../components/header/Header";
import { Row, Col } from "react-bootstrap";
import ContactusImage from "../../assets/contactus.png";
import ContactusForm from "./ContactusForm";

const ContactusScreen = () => {
  return (
    <div>
      <Header />
      <div>
        <Row>
          <Col sm={7} style={{ backgroundColor: "" }}>
            <div className="contactusDiv">
              <div className="contactusIconDiv">
                <img src={ContactusImage} alt="" className="contactusIcon" />
              </div>
              <div className="contactusTextContainer">
                <div className="contactusHeader">Contact us</div>
                <div className="contactusText">
                  Need to get in touch with us? Either fill out the form with
                  your enquiry of find the department email you'd like to
                  contact below.
                </div>
              </div>
            </div>
          </Col>
          <Col sm={5} style={{ backgroundColor: "#faf8f0", height: "92vh" }}>
            <ContactusForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactusScreen;
