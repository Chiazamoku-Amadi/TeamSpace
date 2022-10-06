import React from "react";
import "./NavBar.css";
import PurpleButton from "../PurpleButton/PurpleButton";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function NavBar() {
  return (
    <>
      <Logo className="navbar-logo" />
      <ul className="navbar-menu">
        <li>Pricing</li>
        <li>Features</li>
        <li>Blog</li>
        <li>Resources</li>
        <li>Enterprise</li>
      </ul>
      <div className="ellipses"></div>
      <div className="navbar-button">
        <PurpleButton text="Find Talent" />
      </div>
    </>
  );
}

export default NavBar;
