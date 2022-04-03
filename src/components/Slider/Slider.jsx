import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Styles/Slider.css'
import { SliderItem } from './Assets/SliderItem'
import { slides } from './sliderConfiguration'

export const SmoothSlider = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.offsetWidth - carousel.current.scrollWidth)
  }, [])
  // eslint-disable-next-line react/prop-types
  return (
        <motion.div ref={carousel} className={'carousel'}>
            <motion.div drag={'x'} dragConstraints={{
              right: 0,
              left: width
            }} className={'inner-carousel'}>
                {slides.map((slide, id) => {
                  return (
                        <motion.div className={'item'} key={id}>
                            <SliderItem imageSrc={slide.imageSource}
                            caption={slide.caption}
                            text={slide.text}/>

                        </motion.div>
                  )
                })}

            </motion.div>
        </motion.div>
  )
}
