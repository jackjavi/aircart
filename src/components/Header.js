import React from "react";
import "./Header.css";
import Logo from "../assets/aircart-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="aircart-logo" src={Logo} alt="aircart-logo" />
      </div>
      <div className="header-right">
        <nav className="nav-links">
          <span>
            <a href="/pricing">Pricing</a>
          </span>
          <span>
            <a href="features">Features</a>
          </span>
          <span>
            <a href="login">Login</a>
          </span>
        </nav>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
