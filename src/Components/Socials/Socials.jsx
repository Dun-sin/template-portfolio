import React from 'react'

import './Socials.css';
import { AiFillInstagram, AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
        <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="/">Let's Connect</a>
        </div>
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="/">Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="/">Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="/">Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials
