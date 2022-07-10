import React from 'react';
import Project from './Project/Project.jsx';

const Projects = () => {
  const projectsInfo = {
    anon: {
      name: 'AnonChat App',
      desc: 'An app to help you chat in secret',
      liveLink: 'https://anon-chat-app.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/anon-chat-app',
      techs: ['React', 'Node', 'MongoDB', 'Socket.io', 'Redux'],
      image: 'https://user-images.githubusercontent.com/78784850/178144332-053729f8-ee55-49fa-8f56-dc5203a687d0.png',
      isBuilding: true,
      isOpenSource: true
    },
    trick: {
      name: 'Trick Generator',
      desc: 'A website to help you get simple tricks you can use in your applications with html and css',
      liveLink: 'http://trick-generator.vercel.app/',
      githubLink: 'https://github.com/Dun-sin/trick-generator',
      techs: ['HTML', 'CSS', 'TypeScript'],
      image: 'https://user-images.githubusercontent.com/78784850/178144316-d09aae2b-b809-4f33-a9e5-f437ceeb905d.png',
      isBuilding: true,
      isOpenSoure: true
    }
  }
  return (
    <div>
      <Project info={projectsInfo.anon} />
      <Project info={projectsInfo.trick} />
    </div>
  )
}

export default Projects;