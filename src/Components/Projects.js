import React from "react";
import "./Projects.css";

export default function Projects() {
  const url = "https://bp-trenerstvo.si/";

  return (
    <div className="projects" id="work">
      <h3>My work</h3>
      <div className="container">
        <img
          src="./Images/bp-trenerstvo.jpg"
          alt="bp-trenerstvo"
          className="projects-img"
        ></img>
        <div className="middle" onClick={() => window.open(url, "")}>
          <div className="text">bp-trenerstvo.si/</div>
        </div>
      </div>
      <div className="container">
        <img
          src="./Images/foodo.jpg"
          alt="foodo"
          className="projects-img"
        ></img>
        <div className="middle" onClick={() => window.open(url, "")}>
          <div className="text">glovo clone for practice</div>
        </div>
      </div>
      <div className="container">
        <img
          src="./Images/shooping-cart.jpg"
          alt="js practice"
          className="projects-img"
        ></img>
        <div className="middle" onClick={() => window.open(url, "")}>
          <div className="text">shooping cart (js practice)</div>
        </div>
      </div>
      <p>
        And some screenshots from some projects on Udemy, Freecodecamp, Odin,
        Scrimba, Youtube ...
      </p>
      <div className="smallProjects-background">
        <div>
          <div className="smallProjects">
            <img
              src="./Images/museum.jpg"
              alt="side project"
              className="smallProjects-img"
            ></img>
          </div>
          <div className="smallProjects">
            <img
              src="./Images/baril.jpg"
              alt="side project"
              className="smallProjects-img"
            ></img>
          </div>
        </div>
        <div>
          <div className="smallProjects">
            <img
              src="./Images/table.jpg"
              alt="side project"
              className="smallProjects-img"
            ></img>
          </div>
          <div className="smallProjects">
            <img
              src="./Images/tenzis.jpg"
              alt="side project"
              className="smallProjects-img"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
