import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import image from "../assets/binoy.jpg";
import '../components/Header.css';
import styled from "styled-components";

class Body extends Component {
  render() {
    const alignment = {
      height: "400px",
      width: "400px",
      position: "absolute",
      top: "70px",
      left: "800px",
    };

    
    return(
        <div style={alignment} className="image-responsive">
        <Image src={image}  fluid roundedCircle/>
      </div></Responsive>
      
    );
  }
}

export default Body;


//styled components code

