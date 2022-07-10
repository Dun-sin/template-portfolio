import React from 'react'

const Project = ({info}) => {
  return (
    <div>
      <img src={info.image} />
      <div>
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
        <div>
          info.techs.map(tech => <span >{tech}</span>)
        </div>
        <div>
          <a href={info.liveLink}>Live</a>
          <a href={info.githubLink} >Github</a>
        </div>
      </div>
    </div>
  )
}

export default Project;