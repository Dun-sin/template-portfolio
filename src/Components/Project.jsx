import React from 'react'
import '../styles/Project.css'

const Project = ({ info }) => {
  return (
    <div className="project">
      <h2>{info.name}</h2>
      <p>{info.desc}</p>
      <div className="tech-stack">
        {info.techs.map(item => <div key={item}>{item}</div>)}
      </div>
      <div className="btns">
        <a href={info.liveLink} target="_blank" rel="noreferrer">Live</a>
        <a href={info.githubLink} target="_blank" rel="noreferrer">Github</a>
      </div>
      {info.isOpenSource && <div className="open">Open Source</div>}
    </div>
  )
}

export default Project;
