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
      desc: 'A website to help you get simple tricks you can use in your applications with html and css',
      liveLink: 'http://trick-generator.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/trick-generator',
      techs: ['HTML', 'CSS', 'TypeScript'],
      isOpenSoure: true
    }
  }
  return (
    <div className="Projects">
      <Project info={projectsInfo.anon} />
      <Project info={projectsInfo.trick} />
    </div>
  )
}

export default Projects;
