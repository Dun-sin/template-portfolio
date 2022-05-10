import React from 'react'

import Blob from './blob'

import './Home.css'


const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1><span>
          Hi, I'm Favour!
        </span>👋🏾</h1>
        <p>Full Stack Developer</p>
        <div className="btns">
          <a href='/' className='btn1'>Hire Me</a>
          <a href='/' className='btn2'>View Resume</a>
        </div>
      </div>
      <div>
        <Blob />
      </div>
    </div >
  )
}

export default Home;