import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Teste from '../../components/Pagination'
import {
  Navbar,
  Nav,
  Button,
  FormControl,
  Form,
  Container,
  Row,
  Col,
  Pagination,
} from 'react-bootstrap'

import iphoneImg from '../../assets/img/iphone.jpg'

import './Home.styles.css'
// adicionar classes para sobrescrever as do boot stape

function Home() {
  const [sortitions, setSortitions] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortitionPerPage] = useState(9)

  useEffect(() => {
    async function getSortitions() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setSortitions(res.data)
    }

    getSortitions()
  }, [])

  const indexLastSortition = currentPage * sortitionPerPage
  const indexOfFirstSortition = indexLastSortition - sortitionPerPage
  const currentSortitions = sortitions.slice(
    //pega uma parte do array e cria um novo
    indexOfFirstSortition,
    indexLastSortition
  )

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
              <i className="fas fa-sign-in-alt"></i>
            </Nav.Link>

            <Nav.Link className="nav-link-signup" href="#lifddjjhjsfk">
              Cadastrar-se
              <i className="fas fa-user-plus"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-5">
        <Row className="line">
          <Col md={4}>
            <div className="sortition-card">
              <img className="sortition-img" src={iphoneImg} alt="" />
              <h1>titulo</h1>
              <h5>Nome premio</h5>
              <span>
                Data do sorteio: <time>16/02/1992</time>
              </span>

              <footer className="sortition-card-footer">
                <img src={iphoneImg} alt="" />
                <strong>Usercriador</strong>
                <br />
                <strong>Participantes: 10</strong>
              </footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="sortition-card">
              <img className="sortition-img" src={iphoneImg} alt="" />
              <h1>titulo</h1>
              <h5>Nome premio</h5>
              <span>
                Data do sorteio: <time>16/02/1992</time>
              </span>

              <footer className="sortition-card-footer">
                <img src={iphoneImg} alt="" />
                <strong>Usercriador</strong>
                <br />
                <strong>Participantes: 10</strong>
              </footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="sortition-card">
              <img className="sortition-img" src={iphoneImg} alt="" />
              <h1>titulo</h1>
              <h5>Nome premio</h5>
              <span>
                Data do sorteio: <time>16/02/1992</time>
              </span>

              <footer className="sortition-card-footer">
                <img src={iphoneImg} alt="" />
                <strong>Usercriador</strong>
                <br />
                <strong>Participantes: 10</strong>
              </footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="sortition-card">
              <img className="sortition-img" src={iphoneImg} alt="" />
              <h1>titulo</h1>
              <h5>Nome premio</h5>
              <span>
                Data do sorteio: <time>16/02/1992</time>
              </span>

              <footer className="sortition-card-footer">
                <img src={iphoneImg} alt="" />
                <strong>Usercriador</strong>
                <br />
                <strong>Participantes: 10</strong>
              </footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="sortition-card">
              <img className="sortition-img" src={iphoneImg} alt="" />
              <h1>titulo</h1>
              <h5>Nome premio</h5>
              <span>
                Data do sorteio: <time>16/02/1992</time>
              </span>

              <footer className="sortition-card-footer">
                <img src={iphoneImg} alt="" />
                <strong>Usercriador</strong>
                <br />
                <strong>Participantes: 10</strong>
              </footer>
            </div>
          </Col>
          <Col md={4}>
            <div className="sortition-card">
              <img className="sortition-img" src={iphoneImg} alt="" />
              <h1>titulo</h1>
              <h5>Nome premio</h5>
              <span>
                Data do sorteio: <time>16/02/1992</time>
              </span>

              <footer className="sortition-card-footer">
                <img src={iphoneImg} alt="" />
                <strong>Usercriador</strong>
                <br />
                <strong>Participantes: 10</strong>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>

      {currentSortitions.map((sortition, index) => {
        return <h1 key={index}>{sortition.title}</h1>
      })}

      <Teste
        totalSortitions={sortitions.length}
        sortitionPerPage={sortitionPerPage}
        paginate={(pageNumber) => {
          setCurrentPage(pageNumber)
        }}
      />
    </>
  )
}

export default Home
