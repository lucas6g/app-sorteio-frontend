import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

import ReactCodeInput from 'react-verification-code-input'
import { useHistory, Link } from 'react-router-dom'
import CustomButton from '../../components/CustomButton/CustomButton'

import './Confirmation.css'

function Confirmation() {
  const [confirmationCode, setComfirmationCode] = useState(0)

  const history = useHistory()
  return (
    <Container fluid className="confirmation-container ">
      <Container className="form-container mt-5">
        <Link
          onClick={() => {
            history.goBack()
          }}
        >
          <i class="fas fa-arrow-left mb-4"></i>
        </Link>

        <h1 className="form-title">Confirmação</h1>
        <Form className="form">
          <Form.Text className="text-center">
            Um codigo de confirmação foi emviado para o email
            lucas.trabalho1533@gmail.com digite o codigo no campo abaixo <br />
          </Form.Text>
          <br />
          <ReactCodeInput
            fieldHeight={40}
            fieldWidth={40}
            className="comfirmation-code-input"
            autoFocus={true}
            onChange={(number) => {
              setComfirmationCode(number)
            }}
          />

          <CustomButton>Comfirmar</CustomButton>
        </Form>
      </Container>
    </Container>
  )
}

export default Confirmation
