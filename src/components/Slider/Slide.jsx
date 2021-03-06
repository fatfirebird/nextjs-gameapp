import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { Box } from '../UI/Box'

const SSlide = styled(Box)`
  div {
    height: 100%;
  }
`

export const ScreenshotsSlide = ({ height, width, image }) => {
  return (
    <SSlide height="100%">
      <Image src={image} height={height} width={width} />
    </SSlide>
  )
}
