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
            <a href="#test1">Work</a>
          </li>
          <li>
            <a href="#test2">Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}
