import React, { useState } from 'react'

import { Link } from 'react-scroll'

import './Nav.css'

import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const nav =
    <ul style={{ pointerEvents: 'auto' }}>
      {/* <li>Projects</li> */}
      <li><Link onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>
        About
      </Link></li>
      <li><Link onClick={handleClick} activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
        Contact
      </Link></li>
    </ul>

  return (
    <div className='nav'>
      <div className='header'>
        <h1>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>
            Favour
          </Link>
        </h1>
        <div onClick={handleClick} className="menu">
          <GiHamburgerMenu />
        </div>
        <div className='large' >
          {nav}
        </div>
      </div>
      <div className='small' style={{
        opacity: isOpen ? '0' : '1',
        pointerEvents: 'none'
      }}>
        {nav}
      </div>
    </div>
  )
}

export default Nav;