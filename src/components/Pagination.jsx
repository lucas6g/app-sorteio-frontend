import React from 'react'
import { Pagination } from 'react-bootstrap'

function Teste({ sortitionPerPage, totalSortitions, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalSortitions / sortitionPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        onClick={() => {
          paginate(i)
        }}
        key={i}
      >
        {i}
      </Pagination.Item>
    )
  }

  return (
    <div>
      <Pagination>{pageNumbers}</Pagination>
    </div>
  )
}

export default Teste
