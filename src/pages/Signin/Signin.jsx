import React, { useState, useContext } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'

import Input from '../../components/Input/Input'
import CustomButton from '../../components/CustomButton/CustomButton'
import * as yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import AuthContext from '../../context/AuthContext'

import './Signin.css'

function Signin() {
  const history = useHistory()
  const { signin, setIsLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationErrors, setValidationErrors] = useState({})
  const [apiError, setApiError] = useState('')
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      email,
      password,
    }

    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email('Email invalido')
          .required('O campo email é obrigatorio'),
        password: yup.string().required('O campo senha é obrigatorio'),
      })

      await schema.validate(data, {
        abortEarly: false, //retorna todos os erros nao apenas o primeiro erro
      })

      setApiError('')
      setValidationErrors({}) // caso nao aja erros de validação
      await signin(data)
      setIsLogin(true)
      history.push('/profile')
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setValidationErrors(getValidationErrors(error))
      } else if (error instanceof Object) {
        if (error.response.data.error.message === 'Conta sem verificação.') {
          history.push('/confirmation')
        }
        setApiError(error.response.data.error.message)
      }
    }
  }
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
            type="text"
            label="Email"
            placeholder="Digite seu Email"
            errorMessage={validationErrors.email}
            error={validationErrors.email ? 'error' : ''}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          />

          <Input
            controlId="formBasicPassword"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage={validationErrors.password}
            error={validationErrors.password ? 'error' : ''}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
          {apiError ? <span className="error-message">{apiError}</span> : null}

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

          <CustomButton onClick={handleSubmit} type="submit">
            Entrar
          </CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default Signin
