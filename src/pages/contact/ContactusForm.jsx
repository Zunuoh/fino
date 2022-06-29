import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactusForm = () => {
  return (
    <div className="contactusFormContainer">
      <Form>
        <div style={{ display: "flex" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" style={{ width: 250 }} />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ marginLeft: 20 }}
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" style={{ width: 250 }} />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" style={{ width: 520 }} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>What can we help you with? </Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            style={{ width: 520 }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "#FCD34D",
            border: "none",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactusForm;
