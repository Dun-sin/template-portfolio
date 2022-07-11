import React from 'react';
import Project from './Project/Project.jsx';
import './Projects.css';

const Projects = () => {
  const projectsInfo = {
    anon: {
      name: 'AnonChat App',
      desc: 'An app to help you chat in secret',
      liveLink: 'https://anon-chat-app.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/anon-chat-app',
      techs: ['React', 'Node', 'MongoDB', 'Socket.io', 'Redux'],
      isOpenSource: true
    },
    trick: {
      name: 'Trick Generator',
      desc: 'A website to help you get simple tricks you can use in your applications',
      liveLink: 'http://trick-generator.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/trick-generator',
      techs: ['HTML', 'CSS', 'TypeScript'],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects">
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.anon} />
        <Project info={projectsInfo.trick} />
      </div>
    </div>
  )
}

export default Projects;
