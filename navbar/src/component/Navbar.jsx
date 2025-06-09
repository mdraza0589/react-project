import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <div className='headerContainer'>
          <div className="name">Website</div>
          <i className="menu-icon" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></i>

          <ul className={`headerLinks ${menuOpen ? 'open' : 'closed'}`}>
            <li><NavLink to={'/home'} className={'link'} >Home</NavLink></li>
            <li><NavLink to={'/about'} className={'link'} >About</NavLink></li>
            <li><NavLink to={'/contact'} className={'link'} >Contact</NavLink></li>
            <li><NavLink to={'/service'} className={'link'} >Service</NavLink></li>
            <span className='closeNav' onClick={closeMenu}>X</span>
          </ul>
        </div>

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navbar
