import React from 'react'
import "./styles/app.scss"
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
const App = () => {
  return (
    <Router>
      <Header/>
       <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
       </Routes>
    </Router>
  )
}

export default App