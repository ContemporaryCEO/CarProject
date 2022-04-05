import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Styles/Slider.css'
import { SliderItem } from './Assets/SliderItem'
import { IconButton } from '@mui/material'
import { SentimentVeryDissatisfied } from '@mui/icons-material'

// eslint-disable-next-line react/prop-types
export const SmoothSlider = ({ source }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.offsetWidth - carousel.current.scrollWidth)
  }, [])
  const slides = source

  // eslint-disable-next-line react/prop-types
  return (<motion.div ref={carousel} className={'carousel'}>
            <motion.div drag={'x'} dragConstraints={{
              right: 0, left: width
            }} className={'inner-carousel'}>
                {slides
                  ? slides.map((slide, id) => {
                    return (

                        <motion.div className={'item'} key={id}>
                            <SliderItem imageSrc={slide.imageSource}
                                        caption={slide.caption}
                                        text={slide.text}
                                        explorable/>
                        </motion.div>

                    )
                  })
                  : <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    margin: '0 auto'
                  }}>No source available...
                        <IconButton>
                            <SentimentVeryDissatisfied
                    fontSize={'large'}/></IconButton></div>}
                {/* <div>No source available :( ...</div> */}
            </motion.div>
        </motion.div>

  )
}
