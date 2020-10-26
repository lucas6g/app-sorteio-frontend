import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustomButton/CustomButton'

import './Signin.css'

function Signin() {
  const history = useHistory()
  return (
    <Container fluid className="signin-container">
      <Container className="form-container mt-5">
        <Link
          to="/#"
          onClick={() => {
            history.goBack()
          }}
        >
          <i className="fas fa-arrow-left mb-4"></i>
        </Link>

        <h1 className="form-title">Entrar</h1>

        <Form className="login-form">
          <Input
            controlId="formBasicEmail"
            type="email"
            label="Email"
            placeholder="Digite seu Email"
          />

          <Input
            controlId="formBasicPassword"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <Link
            style={{ marginBottom: '10px' }}
            to={'/forgot_password'}
            className="login-link"
          >
            Esqueceu sua senha ?
          </Link>

          <Link to="/signup" className="login-link">
            Ainda não tem uma conta ?
          </Link>

          <CustomButton type="submit">Entrar</CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default Signin
