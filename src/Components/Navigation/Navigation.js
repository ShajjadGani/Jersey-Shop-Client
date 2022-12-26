import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from "../../img/logo1.png"
const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt = "logo" style={{ width: '72px' }}></img>Jersey Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/bannar">Bannar</Nav.Link>
              <Nav.Link href="/addService">Add service</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
