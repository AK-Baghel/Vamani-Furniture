import { Route, Routes } from 'react-router-dom'
import { useEffect } from "react";

import './App.css'
import Header from './components/header/Header'
import Home from "./components/home/Home"
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Products from './components/products/Products'
import Grievance from './components/grievance/Grievance'
import Contact from './components/contact/Contact'

function App() {



  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/grievance' element={<Grievance />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
