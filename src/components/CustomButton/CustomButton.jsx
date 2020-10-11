import React from 'react'
import { Button } from 'react-bootstrap'

import './CustomButton.styles.css'
function CustomButton({ children, type }) {
  return (
    <Button type={type} className="custom-button shadow-none">
      {children}
    </Button>
  )
}

export default CustomButton
