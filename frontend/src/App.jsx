import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from "./components/home/Home"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/header' element={<Header />} /> */}
      </Routes>
    </>
  )
}

export default App
