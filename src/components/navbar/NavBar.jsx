import { Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import "../navbar/NavBar.css";

const NavBar = () => {

    return(
        <section className="dark">
        <Container >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home" >Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-around p-1">
    <Nav  >
    <Nav.Link href="#about me" className="mx-5" >About Me</Nav.Link>
      <Nav.Link href="#projects" className="mx-5">Projects</Nav.Link>
      <Nav.Link href="#services" className="mx-5 ">Services</Nav.Link>
      <Nav.Link href="#skills" className="mx-5 ">Skills</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
</section>
    )
}

export default NavBar;

   



