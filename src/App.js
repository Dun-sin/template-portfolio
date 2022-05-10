import './App.css';

// components
import Home from './Components/Home/Home';
import Nav from './Components/NavBar/Nav';
import Socials from './Components/Socials/Socials';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Mail from './Components/Mail/Mail';

// icon
import { CgArrowLongUp } from 'react-icons/cg';
import { animateScroll } from 'react-scroll';

function App() {
	return (
		<div className='App'>
			<div>
				<Nav />
				<Home />
			</div>
			<div className='dark'>
				<Socials />
				<About />
				<Skills />
			</div>
			<div>
				<Mail />
			</div>
			<div className='dark'>
				<p>Thank you for scrolling!</p>
				<div className='arrow' onClick={() => animateScroll.scrollToTop()}>
					<CgArrowLongUp />
				</div>
			</div>
		</div>
	);
}

export default App;
