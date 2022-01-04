
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import Education from './components/education/Education';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
   <>
     <NavBar />
     <Profile />
     <AboutMe />
     <Projects />
     <Education />
     <Skills />
     </>
   
  );
}

export default App;
