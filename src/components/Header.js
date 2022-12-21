import React from "react";
import "../styles/Global.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navBar">
      <h3 className="name">Prescilla</h3>
      <div className="navItems">
        <Link to="/">HOME</Link>
        <Link to="/About">ABOUT</Link>
        <Link to="/Projects">PROJECTS</Link>
        <Link to="/Contact">CONTACT</Link>
      </div>
    </div>
  );
}
