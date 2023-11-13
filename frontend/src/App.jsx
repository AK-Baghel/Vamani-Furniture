import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from "./components/home/Home"
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Products from './components/products/Products'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/furniture' element={<Home />} />
        <Route path='/furniture/about' element={<About />} />
        <Route path='/furniture/products' element={<Products />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
