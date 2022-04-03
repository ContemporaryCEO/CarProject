import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import Typography from '@mui/material/Typography'
import './styles/Model.css'
import { useWindowSize } from '../../tools/customHooks'
import { windowBreakpoints, localizedLayout } from './modelsConfiguration'

export const Models = () => {
  const itemData = localizedLayout
  const breakpoints = windowBreakpoints
  const [width] = useWindowSize()

  return (
      <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant={'h2'} align={'center'}>{localizedLayout.headerMessage}</Typography>
          <hr style={{ width: '30%', margin: '3rem auto' }}/>
          <Typography variant={'h3'} align={'center'}>{localizedLayout.subheaderMessage}</Typography>
          <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
              <ImageList variant="masonry" cols={width < breakpoints.sm ? 1 : 2} gap={25}>
                  {itemData.carItems.map((item, id) => (
                      <ImageListItem className={'model-list-item'} key={id}>
                          <img
                              className={'model-image'}
                              style={{ borderRadius: '1rem' }}
                              src={`${item.img}`}
                              srcSet={`${item.img}`}
                              alt={item.title}
                              loading="lazy"
                          />
                          <Typography variant={'h6'} className={'model-list-item-text'}>{item.text}</Typography>
                          <ImageListItemBar position="below" title={item.title} />
                      </ImageListItem>
                  ))}
              </ImageList>
          </Box>
      </Container>
  )
}
