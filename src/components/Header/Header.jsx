import React from 'react'

import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Header.styles.css'
function Header() {
  return (
    <Navbar className="navbar" expand="lg">
      <div className="logo-container">
        <Navbar.Brand className="logo" href="#home">
          Sorteio Validado
        </Navbar.Brand>
      </div>

      <Navbar.Toggle className="btn-toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="menu" id="basic-navbar-nav">
        <Nav className="nav">
          <Link className="nav-link" to="/">
            Sorteios
          </Link>
          <Link className="nav-link" to="/about">
            Sobre
          </Link>

          <Nav.Link className="nav-link" href="#">
            Contato
          </Nav.Link>

          <Form className="form-search" inline>
            <FormControl
              type="text"
              placeholder="Nome do premio"
              className="mr-sm-2 input-search shadow-none"
            />

            <Button className="btn-search shadow-none" variant="outline-light">
              Buscar
            </Button>
          </Form>

          <Link to="/signin" className="nav-link-signin">
            Entrar
            <i className="fas fa-sign-in-alt"></i>
          </Link>

          <Link to="/signup" className="nav-link-signup">
            Cadastrar-se
            <i className="fas fa-user-plus"></i>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
