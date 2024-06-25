import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {FaUser, FaShoppingCart} from 'react-icons/fa'
import logo from '../assets/photos/basketlogo.png'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>
            <img src={logo} alt='logo' width="50" height="50"></img>
            basketMart
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
              <Nav.Link> <FaShoppingCart /> cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Signin">
              <Nav.Link><FaUser /> Signin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;