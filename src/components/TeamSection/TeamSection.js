import React from 'react'
import './TeamSection.css'
import img1 from './ContentCreator.png'
import img2 from './TeamCss.png'

function TeamSection() {
  return (
    <div className='TeamSection'>
       <div className="places">
            <div><a href="#"><img src={img1}/></a></div>
            <div><a href="#"><img src={img2}/></a></div>
        </div>
        <div className="link">
            <a href="#">linktr.ee/teamchr</a>
        </div>
    </div>
  )
}

export default TeamSection
