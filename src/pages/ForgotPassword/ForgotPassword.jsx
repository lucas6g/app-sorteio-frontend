import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'
import './ForgotPassword.css'
import Input from '../../components/Input/Input'

function ForgotPassword() {
  const history = useHistory()
  return (
    <Container fluid className="forgot-password-container ">
      <Container className="form-container mt-5">
        <Link
          onClick={() => {
            history.goBack()
          }}
        >
          <i class="fas fa-arrow-left mb-4"></i>
        </Link>
        <h1 className="form-title">Esqueceu a Senha</h1>
        <Form className="form">
          <p className="text-lead">
            Para alterar sua senha digite seu email no campo abaixo.
          </p>
          <br />

          <Input
            controlId="formBasicEmail"
            type="email"
            label="Email"
            placeholder={'Digite seu Email'}
          />

          <CustomButton>Enviar</CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default ForgotPassword
