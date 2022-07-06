import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = () => {
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
            Shop now
          </Button>
    </div>
  )
}

export default ButtonComponent