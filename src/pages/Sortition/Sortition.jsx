import React from 'react'

import Header from '../../components/Header/Header'
import { Container, Col, Row } from 'react-bootstrap'
import imgSortition from '../../assets/img/iphone.jpg'

import Custombutton from '../../components/CustomButton/CustomButton'
import './Sortition.css'

function Sortition() {
  return (
    <>
      <Header />
      <Container className="container-presentation mt-3" fluid>
        <Container className="sortition-container">
          <Row>
            <Col className="sortition-presentation" md={8}>
              <div className="sortition-content">
                <div className="img-container">
                  <img src={imgSortition} alt="" />
                </div>
                <h1>Descrição</h1>
                <p className="text-lead pl-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                </p>

                <div className="rules">
                  <h1>Regras</h1>
                  <ul className="rules-list">
                    <li className="rule-item">
                      <i className="fas fa-check"> </i>
                      Lorem Ipsum is simply dummy text of the printing{' '}
                    </li>
                    <li className="rule-item">
                      <i className="fas fa-check"> </i>
                      Lorem Ipsum is simply dummy text of the printing{' '}
                    </li>
                    <li className="rule-item">
                      <i className="fas fa-check"> </i>
                      Lorem Ipsum is simply dummy text of the printing{' '}
                    </li>
                    <li className="rule-item">
                      <i className="fas fa-check"> </i>
                      Lorem Ipsum is simply dummy text of the printing{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col className="sortition-info" md={4}>
              <div className="sortition-data">
                <h5>Premio:Iphone 7</h5>
                <span>
                  Data do sorteio: <time>16/02/1992</time>
                </span>
                <span>Validado: Não</span>
                <span>Status: Realizado</span>
                <span>
                  Vencedor: <strong>Lucas</strong>{' '}
                </span>
                <strong>Participantes: 10</strong>

                <footer className="sortition-card-footer">
                  <img src={imgSortition} alt="" />
                  <strong>Usercriador</strong>
                  <br />
                </footer>

                <Custombutton>Participar</Custombutton>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Sortition
