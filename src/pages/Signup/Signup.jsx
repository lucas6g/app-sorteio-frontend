import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustomButton/CustomButton'
import * as yup from 'yup'
import showErrorMessage from '../../utils/showErrorMessage'

import './Signup.css'
function Signup() {
  const history = useHistory()

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      userName,
      email,
      password,
      comfirmPassword,
    }

    try {
      const schema = yup.object().shape({
        userName: yup
          .string()
          .min(6, 'O campo nome deve ter no minimo 6 carateres.'),
        email: yup
          .string()
          .email('Email invalido')
          .required('O campo email é obrigatorio'),
        password: yup.string().min(6, 'A senha de ter no minimo 6 Caracteres'),
        comfirmPassword: yup
          .string()
          .required('O campo Comfirme Senha é obrigatorio')
          .oneOf([yup.ref('password'), null], 'As senhas não coincidem'),
      })

      await schema.validate(data, {
        abortEarly: false, //retorna todos os erros nao apenas o primeiro erro
      })
      setErrors({}) // caso nao aja erros
    } catch (error) {
      setErrors(showErrorMessage(error))
    }
  }

  return (
    <Container fluid className="signup-container">
      <Container className="form-container mt-5">
        <Link
          to="/#"
          onClick={() => {
            history.goBack()
          }}
        >
          <i className="fas fa-arrow-left mb-4"></i>
        </Link>

        <h1 className="form-title">Cadastrar-se</h1>

        <Form onSubmit={handleSubmit} className="login-form">
          <Input
            controlId="formBasicText"
            type="text"
            label="Nome de Usuario"
            errorMessage={errors.userName}
            error={errors.userName ? 'error' : ''}
            placeholder="Escolha um nome"
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            value={userName}
          />

          <Input
            controlId="formBasicEmail"
            type="text"
            label="Email"
            placeholder="Digite seu Email"
            errorMessage={errors.email}
            error={errors.email ? 'error' : ''}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          />

          <Input
            controlId="formBasicPassword"
            type="password"
            label="Senha"
            placeholder="Escolha uma senha"
            errorMessage={errors.password}
            error={errors.password ? 'error' : ''}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />

          <Input
            controlId="formBasicConfirmPassword"
            type="password"
            label="Confirme a Senha"
            placeholder="Confirme a senha"
            errorMessage={errors.comfirmPassword}
            error={errors.comfirmPassword ? 'error' : ''}
            onChange={(e) => {
              setComfirmPassword(e.target.value)
            }}
            value={comfirmPassword}
          />

          <Link to="/signin" className="login-link">
            Já possui uma conta ?
          </Link>

          <CustomButton type="submit">Cadastrar</CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default Signup
