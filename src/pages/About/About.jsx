import React from 'react'

import Header from '../../components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'

import CustomButton from '../../components/CustomButton/CustomButton'
import './About.css'

function About() {
  return (
    <>
      <Header />
      <Container className="text-center">
        <h1 className="mt-5 mb-5 ">A base do Sorteio Validado</h1>
        <Row>
          <Col md={4}>
            <div className="pillar">
              <div className="icon-container">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Etica</h3>
              <p className="text-lead">
                Agindo dentro dos padrões convencionais, sem prejuízo do próximo
                e cumprindo os valores a nós estabelecidos com todos os nossos
                usuarios.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="pillar">
              <div className="icon-container">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Confiança</h3>
              <p className="text-lead">
                Com o objetivo de manter em funcionamento os sorteios do começo
                ao fim, somos a plataforma em que você pode confiar, com
                atitudes honestas, leais e sinceras.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="pillar">
              <div className="icon-container">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Segurança</h3>
              <p className="text-lead">
                A segurança é prioridade na Sorteio Validado. Trabalhamos duro
                para manter a plataforma segura.
              </p>
            </div>
          </Col>
        </Row>
        <CustomButton>Cadastrar-Se</CustomButton>
      </Container>
    </>
  )
}

export default About
