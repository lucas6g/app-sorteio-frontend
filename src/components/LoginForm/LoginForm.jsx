import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

import Input from '../Input/Input'
import CustomButton from '../CustomButton/CustomButton'

import './LoginForm.styles.css'
function LoginForm({ isSignin, title, btnLabel, to, loginLink }) {
  return (
    <Container className="form-container mt-5">
      <h1 className="form-title">{title}</h1>

      <Form className="login-form">
        {!isSignin ? (
          <Input
            controlId="formBasicText"
            type="text"
            label="Nome de Usuario"
            placeholder="Escolha um nome"
          />
        ) : null}

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
          placeholder={isSignin ? 'Digite sua senha' : 'Escolha uma senha'}
        />

        {!isSignin ? (
          <Input
            controlId="formBasicConfirmPassword"
            type="password"
            label="Confirme a Senha"
            placeholder="Confirme a senha"
          />
        ) : null}

        <Link to={to} className="login-link">
          {loginLink}
        </Link>

        <CustomButton type="submit">{btnLabel}</CustomButton>
      </Form>
    </Container>
  )
}

export default LoginForm
