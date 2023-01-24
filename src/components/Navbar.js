import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className='header'>
          <div className='container'>
              <div className='nav-menu'>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/coins'>Coins</Link>
                  </li>
                  <li>
                      <a href='/'>Blockchain</a>
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