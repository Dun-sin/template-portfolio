import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = {
    smart: {
      name: 'Smart Search',
      desc: 'Find the best smartphone for you',
      liveLink: 'https://smartsearch-production.up.railway.app',
      githubLink: 'https://github.com/Dun-sin/smartsearch',
      techs: ['Next', 'API', 'Puppeteer'],
      isOpenSource: true
    },
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
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.smart} />
        <Project info={projectsInfo.anon} />
        <Project info={projectsInfo.trick} />
      </div>
    </div>
  )
}

export default Projects;
