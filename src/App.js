
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import Education from './components/education/Education';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
     <NavBar />
     <Profile />
     <AboutMe />
     <Projects />
     <Education />
     <Skills />
     <Contact />
     <Footer />
     </>
   
  );
}

export default App;
