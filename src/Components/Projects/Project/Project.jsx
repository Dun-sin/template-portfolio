import React from 'react'
import './Project.css'

const Project = ({info}) => {
  return (
    <div className="project">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
        <div className="tech-stack">
          {info.techs.map(item => <div key={item}>{item}</div>)}
        </div>
        <div className="btns">
          <a href={info.liveLink}>Live</a>
          <a href={info.githubLink} >Github</a>
      </div>
    </div>
  )
}

export default Project;