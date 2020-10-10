import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'
import { Container } from 'react-bootstrap'
import './Signup.styles.css'
function Signup() {
  return (
    <Container fluid className="signup-container">
      <LoginForm
        isSignin={false}
        title="Cadastrar-Se"
        btnLabel="Cadastrar"
        to="/signin"
        loginLink="Já possui uma conta ?"
      />
    </Container>
  )
}

export default Signup
