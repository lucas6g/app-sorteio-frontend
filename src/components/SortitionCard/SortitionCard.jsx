import React from 'react'
import { Link } from 'react-router-dom'
import imgSortition1 from '../../assets/img/sorteio2.jpg'
import './SortitionCard.styles.css'
import { Col } from 'react-bootstrap'

function SortitionCard() {
  return (
    <Col md={4}>
      <Link style={{ textDecoration: 'none' }} to="/sortition">
        <div className="sortition-card">
          <img className="sortition-img" src={imgSortition1} alt="" />
          <h1>titulo</h1>
          <h5>Nome premio</h5>
          <span>
            Data do sorteio: <time>16/02/1992</time>
          </span>
          <span>Status: Realizado</span>
          <span>
            Vencedor: <strong>Lucas</strong>
          </span>
          <span>Participantes: 10</span>

          <footer className="sortition-card-footer">
            <img src={imgSortition1} alt="" />
            <strong>Usercriador</strong>
            <br />
          </footer>
        </div>
      </Link>
    </Col>
  )
}

export default SortitionCard
