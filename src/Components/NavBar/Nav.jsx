import React, { useState } from 'react'

import './Nav.css'

import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)

  const nav =
    <ul>
      <li>Home</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>

  return (
    <div className='nav'>
      <div>
        <h1>Favour</h1>
        <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
        <div className='large' >
          {nav}
        </div>
      </div>
      <div className='small' style={{
        display: isOpen ? 'none' : 'block'
      }}>
        {nav}
      </div>
    </div>
  )
}

export default Nav;