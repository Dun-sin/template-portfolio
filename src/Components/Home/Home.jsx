import React from 'react'

import Blob from './blob'

import './Home.css'

import TypeWriterEffect from 'react-typewriter-effect';


const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1><span>
          Hi, I'm Favour!
        </span>👋🏾</h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'FullStack Developer',
            'Making Your Website beautifully',
            'Follow My Instagram'
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
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