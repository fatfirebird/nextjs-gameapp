import Image from 'next/image'
import React from 'react'

import { Box } from '../UI/Box'

export const ScreenshotsSlide = ({ height, width, image }) => {
  return (
    <Box>
      <Image src={image} height={height} width={width} />
    </Box>
  )
}
