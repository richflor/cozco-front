import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Contact } from './component/Contact'
import { Presentation } from './component/Presentation'
import { Products } from './component/Products'
import { Navbar } from './component/common/Navbar'
import { Footer } from './component/common/Footer'
import { createTheme, ThemeProvider } from '@mui/material'
import { Partners } from './component/Partners'

const theme = createTheme({
  palette:{
    primary:{
      main:"#B04F8E",
      dark:"#881459",
      contrastText: '#FDE190',
    },
    secondary:{
      main:"#D9BB35",
      light: "#FDE190",
      dark: "#F5C03F",
      contrastText: '#B04F8E',
    },
    text:{
      // primary: '#fff'
    }
  },
  typography:{
    fontFamily: "Roboto, Cunia",
    body2:{
      fontSize: "0.800rem"
    }
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <a href="#home" aria-hidden="true" id="home"></a>
        <Navbar/>
        <Presentation/>
        <a href="#product" aria-hidden="true" id="product"></a>
        <Products/>
        <a href="#partners" aria-hidden="true" id="partners"></a>
        <Partners/>
        <a href="#contact" aria-hidden="true" id="contact"></a>
        <Contact/>
        <Footer/>
      </ThemeProvider>
    </Router>
  ) 
}

export default App
