import React from 'react'
import './Home.css'
import Navbar from '../NavBar/Navbar';

function Home() {
  return (
    <div className='homePage'>
       <Navbar/>
       <div className='introduction'>
          <h1>GAMING<br/>
          IS OUR PASSION</h1>
          <div className='buttons'>
            <button className='btnShop'>View Member</button>
            <button className='btnShop'>Shop</button>
          </div>
       </div>
      
       
    </div>
  )
}

export default Home
