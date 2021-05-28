import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Box } from '../UI/Box'
import { ScreenshotsSlide } from './Slide'

export const ScreenshotsSlider = ({ screenshots }) => {
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
  }

  return (
    <Box>
      <Swiper {...swiperConfig}>
        {screenshots.map(({ id, image, width, height }) => (
          <SwiperSlide key={id}>
            <ScreenshotsSlide image={image} width={width} height={height} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
