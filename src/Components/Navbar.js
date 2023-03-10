import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}
