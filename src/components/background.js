import React, { Component } from "react";
import image from "../assets/background.png";
class Background extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${image})`,
      
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
        <body style={myStyle}></body>
    );
  }
}

export default Background;
