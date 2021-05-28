import Head from 'next/head'
import React from 'react'
import { Container, Row } from 'styled-bootstrap-grid'
import { Games } from '../src/api/games'

import { CardList } from '../src/containers/CardList'

export default function Home({ data: { results, next }, initialOrdering }) {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Главная страница" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <CardList initialData={results} next={next} initialOrdering={initialOrdering} />
        </Row>
      </Container>
    </>
  )
}

export async function getServerSideProps({ query: { ordering = '', page = 1 } }) {
  const { data } = await Games.getGamesList({ ordering, page })

  return {
    props: { data, initialOrdering: ordering },
  }
}
