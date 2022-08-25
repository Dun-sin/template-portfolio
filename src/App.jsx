import './styles/App.css';

import { animateScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

// components
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import About from './Components/About';
import Skills from './Components/Skills';
import Mail from './Components/Mail';

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
        <Fade fraction={.2} triggerOnce>
          <Projects />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Socials />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <About />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Skills />
        </Fade>
      </div>
      <div>
        <Fade fraction={.2} triggerOnce>
          <Mail />
        </Fade>
      </div>
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <p>Thank you for scrolling💘</p>
          <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;