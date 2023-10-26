import React from 'react'
import '../styles/Project.css'

const Project = ({ name, desc, techs, liveLink, githubLink, isOpenSource }) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className="tech-stack">
        {techs.map(item => <div key={item}>{item}</div>)}
      </div>
      <div className="btns">
        <a href={liveLink} target="_blank" rel="noreferrer">Live</a>
        <a href={githubLink} target="_blank" rel="noreferrer">Github</a>
      </div>
      {isOpenSource && <div className="open">Open Source</div>}
    </div>
  )
}

export default Project;

