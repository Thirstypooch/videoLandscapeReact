import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            YOU Organic Skincare
            <i class='fab fa-envira' style={{ marginLeft: '.5rem' }}></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/misión' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-american-sign-language-interpreting fa-2x"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-barcode fa-2x"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/packs' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-dolly-flatbed fa-2x"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/limpieza' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-leaf fa-2x"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                <i class='far fa-comment-dots fa-2x'></i>
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>productos</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
