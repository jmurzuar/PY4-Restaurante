import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';

export const NavbarComponent = () => {
  return (
    
    <>
      
    
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to = "/" className="NavLinkCustom">REACT-FLAVOR</Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link as={Link} to = "/PY4-Restaurante/">inicio</Nav.Link> */}
          <Nav.Link as={Link} to = "/About" className="NavLinkCustom">nosotros</Nav.Link>
          <Nav.Link as={Link} to = "/Menu" className="NavLinkCustom">menu</Nav.Link>
          <Nav.Link as={Link} to = "/Blog" className="NavLinkCustom">blog</Nav.Link>
          <Nav.Link as={Link} to = "/Reservas" className="NavLinkCustom">reservas</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>

    
  </>

  )
}
