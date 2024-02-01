import React from 'react'
import leader1 from './Rectangle 8.png'
import leader2 from './Rectangle 9.png'
import './CreatorsTeam.css'

function CreatorsTeam() {
  return (
    <div className='CreatorsTeam'>
       <div className="leaders">
            <h1>CONTENT CREATORS</h1>
            <div><img src={leader1} /></div>
            <div><img src={leader2} /></div>
        </div>
        <div className="text-two">
            <h1>CONTENT CREATORS</h1>
        </div>
    </div>
  )
}

export default CreatorsTeam
