import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../components/Header.css';

class Header extends Component {
  render(props) {

    return (
      <div className="Nav-bar">
        <Navbar  variant="light" className="nav-bar">
          <Container>
            <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

