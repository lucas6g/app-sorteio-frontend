import React from 'react'

import {
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap'

import iphoneImg from '../../assets/img/iphone.jpg'

import './Home.styles.css'
// adicionar classes para sobrescrever as do boot stape

function Home() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <div className="logo-container">
          <Navbar.Brand className="logo" href="#home">
            Sorteio Validado
          </Navbar.Brand>
        </div>

        <Navbar.Toggle
          className="btn-toggle"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="menu" id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link className="nav-link" href="#home">
              Sorteios
            </Nav.Link>
            <Nav.Link className="nav-link" href="#tes">
              Regulamento
            </Nav.Link>
            <Nav.Link className="nav-link" href="#tfddf">
              Sobre
            </Nav.Link>
            <Nav.Link className="nav-link" href="#lifdfk">
              Contato
            </Nav.Link>

            <Form className="form-search" inline>
              <FormControl
                type="text"
                placeholder="Nome do premio"
                className="mr-sm-2 input-search"
              />
              <Button className="btn-search" variant="outline-light">
                Buscar
              </Button>
            </Form>

            <Nav.Link className="nav-link-signin" href="#lifddsfk">
              Entrar
              <i class="fas fa-sign-in-alt"></i>
            </Nav.Link>

            <Nav.Link className="nav-link-signup" href="#lifddjjhjsfk">
              Cadastrar-se
              <i class="fas fa-user-plus"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col>
            <div className="teste">
              <img className="img-sortition" src={iphoneImg} alt="" />
              <h2>titulo</h2>
            </div>
          </Col>
          <Col>
            <div className="teste">
              <img className="img-sortition" src={iphoneImg} alt="" />
            </div>
          </Col>
          <Col>
            <div className="teste">
              <img className="img-sortition" src={iphoneImg} alt="" />
            </div>
          </Col>
          <Col>
            <div className="teste">
              <img className="img-sortition" src={iphoneImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
