import React from 'react'
import { SmoothSlider } from './Slider/Slider'
import { slides } from './Slider/sliderConfiguration'

export const News = () => {
  return (
            <SmoothSlider source={slides} />
  )
}
