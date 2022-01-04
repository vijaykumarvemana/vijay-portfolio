
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './components/aboutme/AboutMe';
import Education from './components/education/Education';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div bg="dark">
     <NavBar />
     <Profile />
     <AboutMe />
     <Projects />
     <Education />
    </div>
  );
}

export default App;
