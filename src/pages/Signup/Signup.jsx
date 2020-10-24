import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustomButton/CustomButton'

import './Signup.css'
function Signup() {
  const history = useHistory()
  return (
    <Container fluid className="signup-container">
      <Container className="form-container mt-5">
        <Link
          onClick={() => {
            history.goBack()
          }}
        >
          <i class="fas fa-arrow-left mb-4"></i>
        </Link>

        <h1 className="form-title">Cadastrar-se</h1>

        <Form className="login-form">
          <Input
            controlId="formBasicText"
            type="text"
            label="Nome de Usuario"
            placeholder="Escolha um nome"
          />

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
            placeholder="Escolha uma senha"
          />

          <Input
            controlId="formBasicConfirmPassword"
            type="password"
            label="Confirme a Senha"
            placeholder="Confirme a senha"
          />

          <Link to="signin" className="login-link">
            Já possui uma conta ?
          </Link>

          <CustomButton
            onClick={() => {
              history.push('/confirmation')
            }}
            type="submit"
          >
            Cadastrar
          </CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default Signup
