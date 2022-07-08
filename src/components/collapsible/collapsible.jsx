import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Collapsible(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapsible">
      <Button
        style={{
          backgroundColor: "#FCD34D",
          border: "none",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          marginLeft: "45%",
          marginTop: 40,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label}
      </Button>
      {isOpen && <div className="content">{props.children}</div>}
    </div>
  );
}

export default Collapsible;
