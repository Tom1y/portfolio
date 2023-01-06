import React from "react";
import "./Projects.css";

export default function Projects() {
  const url = "https://bp-trenerstvo.si/";
  const url2 = "https://tom1y.github.io/food-delivery-page/";
  const url3 = "https://loquacious-alpaca-2cbd43.netlify.app/";

  return (
    <div className="projects" id="work">
      <h3>My work</h3>
      <div className="container" onClick={() => window.open(url, "")}>
        <img
          src="./Images/bp-trenerstvo.jpg"
          alt="bp-trenerstvo"
          className="projects-img"
        ></img>
        <div className="middle">
          <div className="text">bp-trenerstvo.si/</div>
        </div>
      </div>
      <div className="container" onClick={() => window.open(url2, "")}>
        <img
          src="./Images/foodo.jpg"
          alt="foodo"
          className="projects-img"
        ></img>
        <div className="middle">
          <div className="text">glovo clone for practice</div>
        </div>
      </div>
      <div className="container" onClick={() => window.open(url3, "")}>
        <img
          src="./Images/shooping-cart.jpg"
          alt="js practice"
          className="projects-img"
        ></img>
        <div className="middle">
          <div className="text">shopping cart (js practice)</div>
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
