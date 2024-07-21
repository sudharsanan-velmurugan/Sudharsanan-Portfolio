import React from 'react'
import Navbar from './Navbar/Navbar'
import './index.css'
import Header from './Header/Header'
import Services from './Services/Services'
import Works from './Works/Works'
import Footer from './Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Works/>
      <Footer/>
    </div>

  )
}

export default App
