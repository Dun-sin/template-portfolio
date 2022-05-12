import './App.css';

import { animateScroll } from 'react-scroll';
import { Slide } from 'react-awesome-reveal';

// components
import Home from './Components/Home/Home';
import Nav from './Components/NavBar/Nav';
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
				<Slide>
					<Socials />
				</Slide>
				<Slide>
					<About />
				</Slide>
				<Slide>
					<Skills />
				</Slide>
			</div>
			<div>
				<Slide>
					<Mail />
				</Slide>
			</div>
			<div className='dark'>
				<Slide>
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
