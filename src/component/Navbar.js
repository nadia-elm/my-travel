import React from 'react'
// import { logo } from '../images/logo.svg'
export const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-center'>
          <div class='nav-header'>
            <img src='' class='nav-logo' alt='myTravel' />
            <button type='button' class='nav-toggle' id='nav-toggle'>
              <i class='fas fa-bars'></i>
            </button>
          </div>

          <ul class='nav-links' id='nav-links'>
            <li>
              <a href='#home' class='nav-link'>
                {' '}
                home{' '}
              </a>
            </li>

            <li>
              <a href='#about' class='nav-link'>
                {' '}
                about{' '}
              </a>
            </li>

            <li>
              <a href='#services' class='nav-link'>
                {' '}
                services{' '}
              </a>
            </li>

            <li>
              <a href='#tours' class='nav-link'>
                {' '}
                tours
              </a>
            </li>
          </ul>

          <ul class='nav-icons'>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                class='nav-icon'
              >
                <i class='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                class='nav-icon'
              >
                <i class='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                class='nav-icon'
              >
                <i class='fab fa-squarespace'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
