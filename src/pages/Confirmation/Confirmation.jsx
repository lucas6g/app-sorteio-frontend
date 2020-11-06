import React, { useState, useContext } from 'react'
import { Container, Form } from 'react-bootstrap'
import AuthContext from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import ReactCodeInput from 'react-verification-code-input'
import CustomButtom from '../../components/CustomButton/CustomButton'
import api from '../../services/api'
import './Confirmation.css'

function Confirmation() {
  const [confirmationCode, setConfirmationCode] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const { setIsLogin } = useContext(AuthContext)

  const user = JSON.parse(localStorage.getItem('@Sorteio Validado:user'))

  const history = useHistory()

  async function sendConfirmationCode() {
    try {
      const response = await api.post('/confirmation', {
        email: user.email,
        confirmation_token: confirmationCode,
      })
      if (response.data.is_verified) {
        setIsLogin(true)
        setErrorMessage('')
        history.push('/profile')
      }
    } catch (error) {
      setErrorMessage(error.response.data.error.message)
    }
  }

  return (
    <Container fluid className="confirmation-container ">
      <Container className="form-container mt-5">
        <h1 className="form-title">Confirmação</h1>
        <Form className="form">
          <p className="text-center">
            Um codigo de confirmação foi enviado para o email {user.email}{' '}
            digite o codigo no campo abaixo. <br />
          </p>
          <br />
          <ReactCodeInput
            fieldHeight={40}
            fieldWidth={40}
            className="comfirmation-code-input"
            autoFocus={true}
            onChange={(code) => {
              setConfirmationCode(code)
            }}
          />

          {errorMessage ? (
            <span className="error-message">{errorMessage}</span>
          ) : null}

          <CustomButtom onClick={sendConfirmationCode}>Confirmar</CustomButtom>
        </Form>
      </Container>
    </Container>
  )
}

export default Confirmation
