import React from 'react'

import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap'

import './Home.styles.css'
// adicionar classes para sobrescrever as do boot stape

function Home() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="logo" href="#home">
          Sorteio Valido
        </Navbar.Brand>
        <Navbar.Toggle
          className="btn-toggle"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="menu" id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#tes">
              Regulamento
            </Nav.Link>
            <Nav.Link className="nav-link" href="#tfddf">
              Link
            </Nav.Link>
            <Nav.Link className="nav-link" href="#lifdfk">
              Link
            </Nav.Link>

            <Form className="form-search" inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>

            <Nav.Link className="nav-link-signin" href="#lifddsfk">
              Entrar
              <i class="fas fa-sign-in-alt"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Home
