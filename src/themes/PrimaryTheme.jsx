import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const themeOptions = {
  palette: {
    mode: 'dark'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 780,
      md: 1120,
      lg: 1520,
      xl: 1536
    }
  }
}

const themeObject = createTheme(themeOptions)
const theme = responsiveFontSizes(themeObject, { factor: 7 })

export default theme
