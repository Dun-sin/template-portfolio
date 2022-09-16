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
    trick: {
      name: 'Code Magic',
      desc: 'A website to help you get simple tricks you can use in your applications',
      liveLink: 'http://code-magic.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/code-magic',
      techs: ['HTML', 'CSS', 'TypeScript'],
      isOpenSource: true
    },
    anon: {
      name: 'Whisper',
      desc: 'An app to help you chat in secret',
      liveLink: 'https://whischat.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/whisper',
      techs: ['React', 'Node', 'MongoDB', 'Socket.io', 'Redux'],
      isOpenSource: true
    }
  }
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        <Project info={projectsInfo.smart} />
        <Project info={projectsInfo.trick} />
        <Project info={projectsInfo.anon} />
      </div>
    </div>
  )
}

export default Projects;
