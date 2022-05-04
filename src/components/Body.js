import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import image from "../assets/binoy.jpg";
import "../components/Header.css";
import styled from "styled-components";
import "../components/Header.css";
import { Container, Row, Col } from "react-bootstrap";

class Body extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col sm={7}>
            <ContentResponser>content</ContentResponser>
          </Col>
          <Col sm={5}>
            <ImageResponser>
              <Image src={image} fluid roundedCircle />
            </ImageResponser>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Body;

//styled components code
const ImageResponser = styled.div`
  height: 400px;
  width: 400px;
  position: fixed;
  top: 100px;
  right: 200px;
  max-width: 100%;
`;

const ContentResponser = styled.div`
  position: fixed;
  top: 100px;
  left: 200px;
`;
