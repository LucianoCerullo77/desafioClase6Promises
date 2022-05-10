import CartWidget from "../CartWidget/CartWidget"
import { Navbar, Container, Nav } from 'react-bootstrap'



const Header = () => {
  const  counter = 3
    return(
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Fitnesty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#aboutUs">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
          <span className="badge bg-danger">{counter}</span>
        </Container>
      </Navbar>
    )
}

export default Header