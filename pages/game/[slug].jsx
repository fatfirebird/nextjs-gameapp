import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { Box } from '../../src/components/UI/Box'
import { SLink } from '../../src/components/UI/Link'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import r from '../../src/utils/toRem'
import { Games } from '../../src/api/games'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <Col col={6}>
            <Box
              mb={{
                xs: r(16),
                xl: r(24),
              }}
            >
              123321
            </Box>
            <SLink as={Link} href="/">
              adssad
            </SLink>
          </Col>
          <Col col={6} md={12}>
            <Box mb={r(12)}>123321</Box>
            fsdfsdsdf
          </Col>
        </Row>
      </Container>
    </>
  )
}
