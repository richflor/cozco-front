import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Contact } from './component/Contact'
import { Presentation } from './component/Presentation'
// import { Products } from './component/Products'
import { ProductsBis } from './component/ProductBis'
import { Navbar } from './component/common/Navbar'
import { Footer } from './component/common/Footer'
import { createTheme, ThemeProvider } from '@mui/material'

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
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Presentation/>
        <ProductsBis/>
        <Contact/>
        <Footer/>
      </ThemeProvider>
    </Router>
  ) 
}

export default App
