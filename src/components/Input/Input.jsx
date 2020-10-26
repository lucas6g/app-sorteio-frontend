import React from 'react'

import { Form } from 'react-bootstrap'
import './Input.css'
function Input({
  controlId,
  type,
  placeholder,
  label,
  onChange,
  value,
  errorMessage,
  error,
}) {
  return (
    <Form.Group className="input-block" controlId={controlId}>
      <Form.Label className="login-form-label">{label} </Form.Label>
      <Form.Control
        className={`input shadow-none ${error}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {errorMessage ? (
        <span className="error-message">{errorMessage}</span>
      ) : (
        ''
      )}
    </Form.Group>
  )
}

export default Input
