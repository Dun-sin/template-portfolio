import React from 'react'

import Blob from './blob'

import './Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Tap again', 'Helllo', 'You found this', 'I added this...', 'because it seemed cool', `so here's something`, 'did you know that...', `You can't breathe and talk.`, 'the earth is 71% water.']
  const textContent = useRef();

  const handleChange = () => {
    textContent.current.style = 'inline-block';
    textContent.current.innerText = arrayOfWords[number]
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1)
    }
    if ((arrayOfWords.length - 1) === number) {
      // something will be here soon
    }
  }


  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span>
            Hi, I'm Favour!
          </span>
          <span onClick={handleChange}>👋🏾</span>
          <span ref={textContent} style={{ display: 'none' }}>Tap again</span>
        </h1>
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