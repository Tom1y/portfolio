import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <h1>
          <span>Hello.</span>
        </h1>
        <h1>My name is Tomi Horvat.</h1>
        <h2>Self-taught programmer</h2>
      </div>
      <img src="./Images/tomi.jpg" alt="that's me"></img>
    </div>
  );
}
