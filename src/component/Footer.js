import React from 'react'

import {pageLinks, socialLinks} from '../data.js'

export const Footer = () => {
  return (
    <div>
     <footer class='section footer'>
        <ul class='footer-links'>
          {pageLinks.map((link) => {
            return (
              <li>
                <a href={link.href} className='footer-link'>
                {link.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul class='footer-icons'>
          {socialLinks.map((link) => {
            return (
              <li>
                <a href={link.href} target='_blank'
                 rel='noopener noreferrer'
                  class='footer-icon' ><i className={link.icon}></i>
                </a>
              </li>
            )
          })}
        </ul>

        <p class='copyright'>
          copyright &copy; myTravel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    
    </div>
  )
}
