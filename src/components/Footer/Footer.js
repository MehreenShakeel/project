import React from 'react'
import footer from './logo.png'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
              <div className="footer-content-left">
            <h2>Go TO</h2>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Team</li>
                <li>CS:GO</li>
                <li>Content Creator</li>
                <li>Contact</li>
            </ul>
            
            <div className="link-footer">
                <a href="#">Shop.teamchr.nl</a>
            </div>
        </div>
        <div class="footer-logo">
            <img src={footer}/>
        </div>
        <div className="footer-content-right">
            <div>
                <h1>Contact</h1>
                <h2>Press@chrono-esports.com</h2>
                <h2>Team@chrono-esports.com</h2>
            </div>
            <div>
                <p>linktr.ee/teamchr</p>
            </div>
            <div>
                <p>Copyright teamCHR/<br/>
                Chrono Esports</p>
            </div>
   
        </div>
    </div>
  )
}

export default Footer
