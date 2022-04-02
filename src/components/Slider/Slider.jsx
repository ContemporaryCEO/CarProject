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
                {/* <motion.div className={'item'}> */}
                {/* <SliderItem imageSrc={'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?fit=crop&format=jpg&crop=4560,2565,x790,y784,safe'} */}
                {/* caption={'First look at the Lotus Eletre, an EV SUV'} */}
                {/* text={'Famous YouTuber Shmee150 got a first look at the new Lotus Eletre, a high-end luxury, all-electric SUV, this is actually the first four-door model ever from Lotus, and it’s a preview of things to come, as Lotus prepares to launch a sedan on the same bases, and a smaller SUV,...'}/> */}
                {/* </motion.div> */}

                {/* <motion.div className={'item'}> */}
                {/*    <SliderItem imageSrc={'https://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2'} /> */}
                {/* </motion.div> */}

                {/* <motion.div className={'item'}> */}
                {/*    <SliderItem imageSrc={'https://imageio.forbes.com/specials-images/imageserve/5d37033a95e0230008f64eb2/2020-Aston-Martin-Rapide-E/0x0.jpg?fit=crop&format=jpg&crop=3000,1687,x0,y157,safe'} */}
                {/*    /> */}
                {/* </motion.div> */}

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
