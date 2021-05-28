import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '../UI/Box'
import r from '../../utils/toRem'
import styled from 'styled-components'
import { Typography } from '../UI/Typography'

const SCardContainer = styled(Box)`
  cursor: pointer;
  border: 1px solid #000000;
  transition: 0.2s;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`

export const Card = ({ slug, rating, name, imageLink }) => {
  const linkPath = `/game/${slug}`

  return (
    <SCardContainer mb={r(20)}>
      <Link href={linkPath}>
        <Box display="flex" flexDirection="column">
          <Box mb={r(10)}>
            {imageLink ? (
              <Image src={imageLink} width={200} height={100} objectFit={true} sizes="100%" />
            ) : (
              <Typography color="red">No image</Typography>
            )}
          </Box>
          <Box px={r(20)} pb={r(10)}>
            <Box>{name}</Box>
            <Box>{rating} / 5</Box>
          </Box>
        </Box>
      </Link>
    </SCardContainer>
  )
}
