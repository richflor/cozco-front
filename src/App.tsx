import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './component/Home'
import { Contact } from './component/Contact'
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
        <Routes>
          <Route path='/accueil' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/' element={ <Navigate to={"/accueil"}/> } />
          <Route path='*' element={<Navigate to={"/accueil"}/> } />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </Router>
  ) 
}

export default App
