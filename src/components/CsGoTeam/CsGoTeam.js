import React from 'react'
import image1 from './country.png'
import image2 from './turkey.png'
import image3 from './Rectangle 10.png'
import image4 from './Rectangle 11.png'
import image5 from './Rectangle 12.png'
import './CsGoTeam.css'

function CsGoTeam() {
  return (
    <div className='CsGoTeam'>
        <div className="players">
        <h1>CS:GO</h1>
            <div><img src={image1}/></div>
            <div><img src={image2}/></div>
            <div><img src={image3}/></div>
            <div><img src={image4}/></div>
            <div><img src={image5}/></div>
       </div>
       <div className="text">
        <h1>CSGO TEAM</h1>
       </div>
       <hr></hr>
    </div>
  )
}

export default CsGoTeam
