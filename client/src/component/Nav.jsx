import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
    <div className="Main">
      <div className="navbar">
        <h1 id="LOGONAME">WERIIDSHIPS</h1>

        <ul className="div1">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/form">
            <button id="addnew">Add New</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
