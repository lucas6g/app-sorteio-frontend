import React from 'react'
import { Container, Form } from 'react-bootstrap'

import CustomButton from '../../components/CustomButton/CustomButton'
import './ResetPassword.css'
import Input from '../../components/Input/Input'

function ResetPassword() {
  return (
    <Container fluid className="forgot-password-container ">
      <Container className="form-container mt-5">
        <h1 className="form-title">Alterar Senha</h1>
        <Form className="form">
          <p className="text-lead" style={{ marginLeft: '40px' }}>
            Um token foi enviado para o email lucas.trabalho1533@gmail.com copie
            e cole o token no campo abaixo.
          </p>
          <br />

          <Input
            controlId="formBasicToken"
            type="text"
            label="Token"
            placeholder={'Cole seu token aqui'}
          />
          <CustomButton>Alterar Senha</CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default ResetPassword
