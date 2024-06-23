import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {FaUser, FaShoppingCart} from 'react-icons/fa'
import logo from '../assets/photos/basketlogo.png'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
            <img src={logo} alt='logo' width="50" height="50"></img>
            basketMart
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#"> <FaShoppingCart /> cart</Nav.Link>
            <Nav.Link href="#"><FaUser /> Signin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;