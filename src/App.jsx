import React from 'react'
import Home from './pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Checkout from './Pages/Checkout'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Login from './Pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <div>
       <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
