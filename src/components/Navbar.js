import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            You Organic Skincare
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down fa-sm'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/misión' className='nav-links' onClick={closeMobileMenu}>
              <i className="fas fa-american-sign-language-interpreting fa-lg"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              <i className="fas fa-barcode fa-lg"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/packs' className='nav-links' onClick={closeMobileMenu}>
              <i className="fas fa-dolly-flatbed fa-lg"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/limpieza' className='nav-links' onClick={closeMobileMenu}>
              <i className="fas fa-leaf fa-lg"></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                <i className='far fa-comment-dots fa-lg'></i>
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Productos</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
