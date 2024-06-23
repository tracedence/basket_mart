import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <p>&copy; {new Date().getFullYear()} BasketMart</p>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <a href="#" className="me-2">About Us</a>
            <a href="#">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;