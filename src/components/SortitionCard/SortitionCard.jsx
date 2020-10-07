import React from 'react'

import imgSortition1 from '../../assets/img/sorteio2.jpg'
import './SortitionCard.styles.css'
import { Col } from 'react-bootstrap'

function SortitionCard() {
  return (
    <Col md={4}>
      <div className="sortition-card">
        <img className="sortition-img" src={imgSortition1} alt="" />
        <h1>titulo</h1>
        <h5>Nome premio</h5>
        <span>
          Data do sorteio: <time>16/02/1992</time>
        </span>
        <span>Status: Realizado</span>
        <span>Vencedor: Lucas</span>

        <footer className="sortition-card-footer">
          <img src={imgSortition1} alt="" />
          <strong>Usercriador</strong>
          <br />
          <strong>Participantes: 10</strong>
        </footer>
      </div>
    </Col>
  )
}

export default SortitionCard
