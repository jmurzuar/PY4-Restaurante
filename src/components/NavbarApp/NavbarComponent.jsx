import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';

export const NavbarComponent = () => {
  return (
    
    <>
      
    
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to = "/">REACT-FLAVOR</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link as={Link} to = "/PY4-Restaurante/">inicio</Nav.Link> */}
          <Nav.Link as={Link} to = "/About">nosotros</Nav.Link>
          <Nav.Link as={Link} to = "/Menu">menu</Nav.Link>
          <Nav.Link as={Link} to = "/Blog">blog</Nav.Link>
          <Nav.Link as={Link} to = "/Reservas">reservas</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>

    
  </>

  )
}
