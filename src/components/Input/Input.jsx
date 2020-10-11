import React from 'react'

import { Form } from 'react-bootstrap'
import './Input.styles.css'
function Input({ controlId, type, placeholder, label }) {
  return (
    <Form.Group className="input-block" controlId={controlId}>
      <Form.Label className="login-form-label">{label} </Form.Label>
      <Form.Control
        className="input shadow-none"
        type={type}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

export default Input
