import React, { useState } from 'react'

import './Nav.css'

import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    console.log(isOpen)
    console.log('sdfsf')
    setIsOpen(!isOpen)
  }
  const nav =
    <ul style={{ pointerEvents: 'auto' }}>
      <li>Home</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

  return (
    <div className='nav'>
      <div className='header'>
        <h1>Favour</h1>
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