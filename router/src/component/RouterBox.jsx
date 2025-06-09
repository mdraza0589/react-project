import React from 'react'
import { Routes, BrowserRouter,Route,NavLink } from "react-router-dom"
import './RouterStyle.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const RouterBox = () => {
  return (
    <BrowserRouter>
    <div className='container'>
      <ul className='listNav'>
        <li><NavLink to={'/'} className={'linkItem'}>Home</NavLink></li>
        <li><NavLink to={'/about'} className={'linkItem'}>About</NavLink></li>
        <li><NavLink to={'/contact'} className={'linkItem'}>Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default RouterBox



