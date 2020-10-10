import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'
import { Container } from 'react-bootstrap'
import './Signin.styles.css'

function Signin() {
  return (
    <Container fluid className="signin-container">
      <LoginForm
        isSignin={true}
        title="Entrar"
        btnLabel="Entrar"
        to="/signup"
        loginLink="Ainda não tem uma conta ?"
      />
    </Container>
  )
}

export default Signin
