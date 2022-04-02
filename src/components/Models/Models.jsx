import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import Typography from '@mui/material/Typography'
import config from '../../config/default.json'

export const Models = () => {
  const itemData = config.layouts.EN_layout.carItems

  return (
      <Container sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant={'h2'} align={'center'}>Our Best Models</Typography>
          <hr style={{ width: '30%', margin: '3rem auto' }}/>
          <Typography variant={'h3'} align={'center'}>And that is not all</Typography>
          <Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
              <ImageList variant="masonry" cols={3} gap={25}>
                  {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                          <img
                              src={`${item.img}`}
                              srcSet={`${item.img}`}
                              alt={item.title}
                              loading="lazy"
                          />
                          <ImageListItemBar position="below" title={item.title} />
                      </ImageListItem>
                  ))}
              </ImageList>
          </Box>
      </Container>
  )
}
