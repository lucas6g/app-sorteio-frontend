import React, { useState } from 'react'
import { Pagination, Container } from 'react-bootstrap'

import './Paginate.css'

function Paginate({ sortitionPerPage, totalSortitions, paginate }) {
  //numero de paginas
  const pageNumbers = []
  const [active, setActive] = useState(1)

  //ceil arredonda numeros para  inteiros
  for (let i = 1; i <= Math.ceil(totalSortitions / sortitionPerPage); i++) {
    pageNumbers.push(
      //armazenando um array de componentes
      <Pagination.Item
        className="pagination-item"
        onClick={() => {
          paginate(i)
          setActive(i)
        }}
        key={i}
        active={active === i}
      >
        {i}
      </Pagination.Item>
    )
  }

  return (
    <Container style={{ display: 'flex', alignItems: 'center' }}>
      <Pagination style={{ margin: '0px auto', marginTop: '30px' }}>
        {pageNumbers}
      </Pagination>
    </Container>
  )
}

export default Paginate
