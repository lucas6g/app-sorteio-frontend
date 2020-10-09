import React from 'react'

import LoginForm from '../../components/LoginForm/LoginForm'
import {Container} from 'react-bootstrap'
import './Signup.styles.css'
function Signup() {

  return (
    <>
      <Container fluid className="signup-container">
           <LoginForm />
      </Container>
    </>
  )
}

export default Signup
