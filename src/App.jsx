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
import { Footer } from './components/Footer/Footer'
import { SubFooter } from './components/Footer/SubFooter'
import { Scrollable } from './components/Scroll/Scrollable'

//  TODO: Add modals
const App = () => {
  return (<ThemeProvider theme={theme}>
        <>
            <CssBaseline/>
            <Scrollable />
            <header><Navbar/></header>
            <main>
                <News/>
                <ContentSection/>
                <Models/>
            </main>
            <footer>
                <Footer/>
                <SubFooter />
            </footer>
        </>
    </ThemeProvider>)
}

export default App
