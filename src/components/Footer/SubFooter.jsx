import React from 'react'
import Container from '@mui/material/Container'
import { subfoterLocalizedLayout } from './footerConfiguration'
import Typography from '@mui/material/Typography'

export const SubFooter = () => {
  const data = subfoterLocalizedLayout
  return (
        <Container sx={{ bgcolor: 'text.disabled', padding: '1rem', textAlign: 'justify', color: 'text.secondary' }} maxWidth={false}>
            {data.paragraphs.map((element, id) => {
              return (
                    <Typography paragraph key={id}>
                        {element}
                    </Typography>
              )
            })}
        </Container>
  )
}
