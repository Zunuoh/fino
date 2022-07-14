import React from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../components/button/ButtonComponent";

const ContactusForm = () => {
  return (
    <div className="contactusFormContainer">
      <Form>
        <div style={{ display: "flex" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" style={formControl} />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ marginLeft: 20 }}
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" style={formControl} />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" style={formControlOne} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>What can we help you with? </Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            style={formControlOne}
          />
        </Form.Group>
        
        <ButtonComponent label="Submit"/>
      </Form>
    </div>
  );
};

const formControl = { width: 250}
const formControlOne = { width: 520 }
export default ContactusForm;
