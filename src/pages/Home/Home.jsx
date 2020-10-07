import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'

//components
import Header from '../../components/Header/Header'
import SortitionCard from '../../components/SortitionCard/SortitionCard'
import Paginate from '../../components/Paginate/Paginate'
import Footer from '../../components/Footer/Footer'

import './Home.styles.css'
// adicionar classes para sobrescrever as do boot stape

function Home() {
  const [sortitions, setSortitions] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [sortitionPerPage] = useState(15)

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
    //pega uma parte do array e cria um novo com a quantidade
    indexOfFirstSortition,
    indexLastSortition
  )

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="line">
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
          <SortitionCard />
        </Row>
      </Container>
      <Paginate
        totalSortitions={sortitions.length}
        sortitionPerPage={sortitionPerPage}
        // altero a pagina atual com base no numero da paginação
        paginate={(pageNumber) => {
          setCurrentPage(pageNumber)
        }}
      />

      {/* array dividido */}
      {/* {currentSortitions.map((sortition, index) => {
        return <h1 key={index}>{sortition.title}</h1>
      })} */}
      <Footer />
    </>
  )
}

export default Home
