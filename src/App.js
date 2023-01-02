import React from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
      <Projects />
    </>
  );
}

export default App;
