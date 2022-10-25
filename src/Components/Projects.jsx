import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    trick: {
      name: 'Project 1',
      desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
      liveLink: 'website url',
      githubLink: 'https://github.com/',
      techs: ['HTML', 'CSS', 'TypeScript'],
      isOpenSource: true
    },
    anon: {
      name: 'Whisper',
      desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
      liveLink: 'website url',
      githubLink: 'https://github.com/',
      techs: ['React', 'Node', 'MongoDB', 'Socket.io', 'Redux'],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.trick} />
        <Project info={projectsInfo.anon} />
      </div>
    </div>
  )
}

export default Projects;
