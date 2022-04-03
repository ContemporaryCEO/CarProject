import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import config from '../config/default.json'

const breakpoints = config.windowBreakpoints

const themeOptions = {
  palette: {
    mode: 'dark'
  },
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl
    }
  }
}

const themeObject = createTheme(themeOptions)
const theme = responsiveFontSizes(themeObject, { factor: 7 })

export default theme
