import React from 'react'
import { Col, Container, Row } from 'styled-bootstrap-grid'
import Head from 'next/head'

import { Box } from '../../src/components/UI/Box'
import { SLink } from '../../src/components/UI/Link'
import r from '../../src/utils/toRem'
import { Games } from '../../src/api/games'
import { Typography } from '../../src/components/UI/Typography'
import { Genre } from '../../src/components/Genre'
import { ScreenshotsSlider } from '../../src/components/Slider'

export default function Home({ name, genres, released = 'no info', website, description, screenshots }) {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <Box>
              <Typography as="h1" color="black" mb={r(12)}>
                {name}
              </Typography>
              {genres && (
                <Box display="flex" flexWrap="wrap" mb={r(8)}>
                  {genres.map((genre) => (
                    <Genre name={genre.name} key={genre.slug} />
                  ))}
                </Box>
              )}
              <Box display="flex" flexDirection="column">
                <Typography color="black" mb={r(4)} fontWeight={500}>
                  Релиз: {released}
                </Typography>
                <SLink fontSize={r(16)} as={website ? 'a' : Typography} href={website} mb={r(4)}>
                  Официальный сайт: {website ?? 'no info'}
                </SLink>
                <Typography color="black" dangerouslySetInnerHTML={{ __html: description }} mb={r(4)} />
                <SLink href="/">На главную</SLink>
              </Box>
            </Box>
          </Col>
          <Col xs={12} lg={6}>
            <Box
              height={{
                lg: '100%',
              }}
              display={{
                lg: 'flex',
              }}
              alignItems={{
                lg: 'center',
              }}
              overflow={{
                lg: 'hidden',
              }}
            >
              {screenshots?.length && <ScreenshotsSlider screenshots={screenshots} />}
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const {
    data: { name, genres, website, description, released },
  } = await Games.getGameDetail(slug)

  const {
    data: { results },
  } = await Games.geGameScreens(slug)

  console.log(results)

  return {
    props: { name, genres, website, description, released, screenshots: results },
  }
}
