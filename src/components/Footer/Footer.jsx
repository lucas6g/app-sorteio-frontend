import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Footer.css'

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row className="footer-line">
          <Col md={4}>
            <div className="terms-of-use">
              <h4>Termos de Uso</h4>
              <a className="nav-link" href="#">
                Termos
              </a>
            </div>
          </Col>

          <Col md={4}>
            <div className="contact">
              <h4> Contato</h4>
              <a className="nav-link" href="#">
                <i className="fab fa-whatsapp"></i> Whatsapp
              </a>
              <a className="nav-link" href="#">
                <i className="fas fa-envelope-square"></i>{' '}
                sorteiovalidado@gmail.com
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="social-media">
              <h4>Redes Socias</h4>
              <div className="social-media-line">
                <a href="http://google.com.br">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="http://google.com.br">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="http://google.com.br">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
