import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Form,Button} from 'react-bootstrap'

import './LoginForm.styles.css'
function LoginForm(){

  return(
  <Container className="form-container mt-5">
      <h1 className="form-title">Cadastre-Se</h1>

      <Form className="login-form">
        <Form.Group className="input-block" controlId="formBasicText" >
          <Form.Label className="login-form-label" >Nome de usuario</Form.Label>
          <Form.Control className="input shadow-none" type="text" placeholder="Escolha um nome" />
        </Form.Group>

        <Form.Group className="input-block" controlId="formBasicEmail">
          <Form.Label className="login-form-label">Email </Form.Label>
          <Form.Control className="input shadow-none"  type="email" placeholder="Seu Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="input-block" controlId="formBasicPassword">
          <Form.Label className="login-form-label">Senha</Form.Label>
          <Form.Control className="input shadow-none" type="password" placeholder="Escolha Sua Senha" />
        </Form.Group>

        <Form.Group className="input-block" controlId="formBasicConfirmPassword">
          <Form.Label className="login-form-label">Confirme Sua Senha</Form.Label>
          <Form.Control className="input shadow-none" type="password" placeholder="Repita a Senha" />
        </Form.Group>

        <Link to="/" className="login-link" >
            Já possui uma conta ?
        </Link>

        <Button className="btn-login-form shadow-none"  type="submit">
          Cadastrar
        </Button>
    </Form>
    </Container>
  )
}

export default LoginForm