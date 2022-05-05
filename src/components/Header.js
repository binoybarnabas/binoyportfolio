import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import '../components/Header.css';

class Header extends Component {
  render(props) {

    return (
      <div class="nav-bar">
        <Navbar  bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

