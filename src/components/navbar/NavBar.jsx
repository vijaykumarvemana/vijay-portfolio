import { Nav, Navbar, Container} from "react-bootstrap";
import "../navbar/NavBar.css";

const NavBar = () => {

    return(
        <>
        <section className="dark">
        <Container className="text-white" >
        <Navbar collapseOnSelect expand="lg" className="dark text-white"  className="sticky">
  <Navbar.Brand href="#home" className="text-white" >Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-around p-1 text-white">
    <Nav  >
    <Nav.Link href="#about me" className="mx-5 text-white" >About Me</Nav.Link>
      <Nav.Link href="#projects" className="mx-5 text-white">Projects</Nav.Link>
      <Nav.Link href="#services" className="mx-5 text-white ">Services</Nav.Link>
      <Nav.Link href="#skills" className="mx-5 text-white">Skills</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
</section>

</>

    )
}

export default NavBar;

   



