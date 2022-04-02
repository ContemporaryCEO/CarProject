import React from 'react'
import {
  CssBaseline
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Navbar/Navbar'
import theme from './themes/PrimaryTheme'
import './assets/App.css'
import { News } from './components/News'
import { ContentSection } from './components/Content/Content'
import { Models } from './components/Models/Models'

const App = () => {
  return (<ThemeProvider theme={theme}>
            <>
                <CssBaseline/>
                <Navbar/>
                <main>
                    <News/>
                    <ContentSection/>
                    <Models />
                </main>
            </>
        </ThemeProvider>)
}

export default App
