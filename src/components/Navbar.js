import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className='header'>
          <div className='container'>
              <div className='nav-menu'>
                  <li>
                      <a href='/'>Project</a>
                  </li>
                  <li>
                      <a href='/'>Docs</a>
                  </li>
                  <li>
                      <a href='/'>Partner</a>
                  </li>
                  <div className='btn-elements'>
                      <button className='btn'>Connect Wallet</button>
                      </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar