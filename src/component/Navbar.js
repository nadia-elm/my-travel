import React from 'react'
import  logo2 from '../images/logo3.png'
import {pageLinks, socialLinks} from '../data.js'

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-center'>
          <div class='nav-header'>
            <img src={logo2} class='nav-logo' alt='myTravel' />
            <button type='button' class='nav-toggle' id='nav-toggle'>
              <i class='fas fa-bars'></i>
            </button>
          </div>

          <ul class='nav-links' id='nav-links'>
           {pageLinks.map((link) => {
             return <li key={link.id}>
             <a href={link.href} className='nav-link'>
              {link.text}
             </a>
            </li>
           })}
          </ul>

          <ul class='nav-icons'>
           {socialLinks.map((link) => {
            return (
              <li>
                <a href={link.href} target='_blank'
                 rel='noopener noreferrer'
                  className='nav-icon' ><i className={link.icon}></i>
                </a>
              </li>
            )
           })}
  
          </ul>
        </div>
      </nav>
    </div>
  )
}
