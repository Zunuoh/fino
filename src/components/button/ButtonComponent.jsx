import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = (props) => {
  return (
    <div>
       <Button
            style={{
              backgroundColor: "#FCD34D",
              border: "none",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
            }}
          >
           {props.label}
          </Button>
    </div>
  )
}

export default ButtonComponent