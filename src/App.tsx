import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { HomeFirst } from './component/home/HomeFirst'
import { HomeSecond } from './component/home/HomeSecond'
import { HomeThird } from './component/home/HomeThird'
import { ProductFirst } from './component/product/ProductFirst'
import { ProductSecond } from './component/product/ProductSecond'
import { ProductThird } from './component/product/ProductThird'
import { ProductCards } from './component/product/ProductCards'
import { ProductDelivery } from './component/product/ProductDelivery'
import { Contact } from './component/contact/Contact'

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
        <HomeFirst/>
        <HomeSecond/>
        <HomeThird/>
        <ProductFirst/>
        <ProductSecond/>
        <ProductThird/>
        <ProductCards/>
        <ProductDelivery/>
        <Contact/>
      </ThemeProvider>
    </Router>
  ) 
}

export default App
