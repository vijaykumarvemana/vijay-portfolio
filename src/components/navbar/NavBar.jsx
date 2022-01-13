import { Nav, Navbar, Container} from "react-bootstrap";
import "../navbar/NavBar.css";
import Scroll from 'react-scroll';
import { Link } from "react-scroll";


const NavBar = () => {

    return(
        <>
        <section className="dark">
        <Container className="text-white" >
        <Navbar collapseOnSelect expand="lg" className="dark text-white"  className="sticky">
        <Navbar.Brand href="#home" className="text-white" >Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-around p-1 text-white">
        <Nav>
        <Link className="nav-link ">
        <Nav.Link  className="mx-4 text-white" >Home</Nav.Link>
        </Link>
        <Link  className="nav-link " activeClass="active" to="about-me" spy={true} smooth={true} offset={-70} duration={500}>
        <Nav.Link  className="mx-4 text-white" >About Me</Nav.Link>
        </Link>
       
        <Link  className="nav-link" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
        <Nav.Link href="#projects" className="mx-4 text-white">Projects</Nav.Link>
        </Link>
        
        <Link  className="nav-link" activeClass="active" to="education" spy={true} smooth={true} offset={-70} duration={500}>
        
        <Nav.Link href="#services" className="mx-4 text-white ">Education</Nav.Link>
        </Link>
 
        <Link  className="nav-link" activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
        <Nav.Link href="#skills" className="mx-4 text-white">Skills</Nav.Link>
        </Link>
        <Link  className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
        <Nav.Link href="#skills" className="mx-4 text-white">Contact</Nav.Link>
        </Link>
         
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
        </section>

</>

    )
}

export default NavBar;

   



