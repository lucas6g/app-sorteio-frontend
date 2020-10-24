import React from 'react'
import { Button } from 'react-bootstrap'

import './CustomButton.css'
function CustomButton({ children, type, onClick }) {
  return (
    <Button type={type} onClick={onClick} className="custom-button shadow-none">
      {children}
    </Button>
  )
}

export default CustomButton
