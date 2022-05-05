import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import image from "../assets/binoy.jpg";
import "../components/Header.css";
import styled from "styled-components";
import "../components/Header.css";
import { Container, Row, Col } from "react-bootstrap";


class Body extends Component {
  render() {
    const contents = {
      Heading: "Hi, I'm Binoy Barnabas.",
      content:
        "I really love spending so much time in front of computers and eventually ended up becoming a web developer which kinda feels so good right now!",
    };
    return (
        <Container fluid="true">
          <Row>
            <Col sm={7}>
              <HeadingResponser>{contents.Heading}</HeadingResponser>
              <ContentResponser>{contents.content}</ContentResponser>
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
  top: 170px;
  left: 200px;
  height: 400px;
  width: 400px;
`;

const HeadingResponser = styled.h3`
  color: #070922;
  position: fixed;
  top: 130px;
  left: 200px;
`;


/*
const Arrange = styled.div`
position : fixed;
top :300px;
left : 500px;

`;

*/
