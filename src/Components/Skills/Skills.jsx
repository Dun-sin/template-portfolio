import React from 'react'

import './Skills.css';

import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiFigma, SiMongodb, SiFirebase } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
        </div>
        <div className="html">
          <SiHtml5 />
        </div>
        <div className="css">
          <SiCss3 />
        </div>
        <div className="react">
          <SiReact />
        </div>
        <div className="node">
          <SiNodedotjs />
        </div>
        <div className="fig">
          <SiFigma />
        </div>
        <div className="mon">
          <SiMongodb />
        </div>
        <div className="fire">
          <SiFirebase />
        </div>
      </div>
    </div>
  )
}

export default Skills
