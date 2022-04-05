import React from 'react'
import Typography from '@mui/material/Typography'
import './Styles/SliderItem.css'
import { TargetModal } from '../../Modals/Modal'
import { Button } from '@mui/material'

// eslint-disable-next-line react/prop-types
export const SliderItem = ({ imageSrc, text, caption, explorable }) => {
  return (<div className={'slider-item'} onMouseEnter={() => {

  }}>
            {/* eslint-disable-next-line react/prop-types */}
            <img className={'slider-image'} src={imageSrc || 'https://via.placeholder.com/1920x1080'}
                 alt="placeholder"/>
            <div className="slider-item-content">
                {/* eslint-disable-next-line react/prop-types */}
                <Typography className={'slider-item-caption'} variant={'h2'}>{caption || 'Caption here'}</Typography>
                {/* eslint-disable-next-line react/prop-types */}
                <Typography className={'slider-item-text'} variant={'h4'}
                            noWrap={true}>{text || 'Text here'}</Typography>
                {explorable && <TargetModal>
                    <Typography className={'explore-button'} sx={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                        <Button size={'large'} sx={{
                          textAlign: 'center'
                        }}>Explore...</Button>
                    </Typography>
                </TargetModal>}
            </div>
        </div>)
}
