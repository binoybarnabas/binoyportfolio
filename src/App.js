import "./App.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import React from "react";

function App() {
  const nav_name = { name: "Binoy Barnabas" };

  return (
    <>
      <Header name={nav_name.name} />
      <Body />
    </>
  );
}

export default App;
