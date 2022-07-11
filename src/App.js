import './App.css';

import { animateScroll } from 'react-scroll';
import { Slide } from 'react-awesome-reveal';

// components
import Home from './Components/Home/Home';
import Nav from './Components/NavBar/Nav';
import Projects from './Components/Projects/Projects'
import Socials from './Components/Socials/Socials';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Mail from './Components/Mail/Mail';

// icon
import { CgArrowLongUp } from 'react-icons/cg';

function App() {
  return (
    <div className='App'>
      <div>
        <Nav />
        <Home />
      </div>
      <div className='dark'>
        <Slide direction='right' triggerOnce fraction='0.1'>
          <Projects />
        </Slide>
        <Slide triggerOnce>
          <Socials />
        </Slide>
        <Slide direction='right' triggerOnce>
          <About />
        </Slide>
        <Slide triggerOnce >
          <Skills />
        </Slide>
      </div>
      <div>
        <Slide direction='right' triggerOnce>
          <Mail />
        </Slide>
      </div>
      <div className='dark'>
        <Slide triggerOnce>
          <p>Thank you for scrolling!</p>
          <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default App;
