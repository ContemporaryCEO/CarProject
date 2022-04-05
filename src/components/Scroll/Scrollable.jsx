import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { Box, IconButton } from '@mui/material'

export const Scrollable = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    showTopBtn && <div>
        <Box sx={{ position: 'fixed', right: '1rem', bottom: '2rem' }}>
            <IconButton onClick={upScroll}><ArrowCircleUpIcon fontSize={'large'} /></IconButton>
        </Box>

    </div>
  )
}
