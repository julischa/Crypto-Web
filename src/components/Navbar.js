import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className='header mb-5'>
          <div className='container'>
              <div className='nav-menu mx-auto'>
                  <li>
                      <Link to='/'>Home</Link>
                  </li>
                  <li>
                      <Link to='/coins'>Coins</Link>
                  </li>
                  <li>
                      <a href='/'>NFT</a>
                  </li>
                  <li>
                 
                        <Link to='/signup' className='bluebutton'>Login</Link>
                      
                    </li>
              </div>
          </div>
    </nav>
   )
}

export default Navbar