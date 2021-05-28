import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import r from '../../utils/toRem'

import { Box } from '../UI/Box'
import { ScreenshotsSlide } from './Slide.jsx'

export const ScreenshotsSlider = ({ screenshots }) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      768: {
        initialSlide: 1,
        slidesPerView: 1.2,
      },
    },
  }

  // для предотвращения бага при первом рендере слайдера
  useEffect(() => setHasLoaded(true), [])

  return hasLoaded ? (
    <Box
      width="100%"
      maxHeight={{
        _: r(200),
        md: r(300),
        lg: r(400),
      }}
    >
      <Swiper {...swiperConfig}>
        {screenshots.map(({ id, image, width, height }) => (
          <SwiperSlide key={id}>
            <ScreenshotsSlide image={image} width={width} height={height} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  ) : (
    <></>
  )
}
