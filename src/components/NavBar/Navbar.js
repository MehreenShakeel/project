import React from 'react'
import logo from './logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navBar'>
      <button className='navBtn'>Shop</button>
      <img src={logo}/>
      
      
    </div>
  )
}

export default Navbar

