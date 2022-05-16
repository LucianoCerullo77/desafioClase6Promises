import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Container, Nav } from 'react-bootstrap'



const Header = () => {
  const  counter = 1
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">RYM!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#HowDoesItWorks">How does it works</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
          <span className="badge bg-danger">{counter}(  Example)</span>
        </Container>
      </Navbar>
    )
}

export default Header