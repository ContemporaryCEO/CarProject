import React from 'react'
import Typography from '@mui/material/Typography'
import './Styles/SliderItem.css'

export const SliderItem = (props) => {
  return (
        <div className={'slider-item'} onMouseEnter={() => {

        }}>
            {/* eslint-disable-next-line react/prop-types */}
            <img className={'slider-image'} src={props.imageSrc || 'https://via.placeholder.com/1920x1080'} alt="placeholder"/>
            <div className="slider-item-content">
                {/* eslint-disable-next-line react/prop-types */}
                <Typography className={'slider-item-caption'} variant={'h1'}>{props.caption || 'Caption here'}</Typography>
                {/* eslint-disable-next-line react/prop-types */}
                <Typography className={'slider-item-text'} variant={'h4'} noWrap={true}>{props.text || 'Text here'}</Typography>
            </div>
        </div>
  )
}
