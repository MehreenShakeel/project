import React from 'react'
import image from './shirt.png'
import './Collections.css'

function Collections() {
  return (
    <div className='collection'>
        <div className='collectionPara'>
            <h1>OUR NEWEST</h1>
            <h1>COLLECTIONS</h1>
            <h3>25% OFF!</h3>
               
            <button className="btn">Shop Now</button>
        </div>
        <div className="image-shirt">
            <img src={image} className='smallPic'/>
            <img src={image} className='smallPic'/>
            <img src={image} className='largePic'/>

        </div>
        <button className="btn-Shop">Shop Now</button>
    </div>
  )
}

export default Collections
