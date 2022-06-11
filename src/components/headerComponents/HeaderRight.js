import React from "react";
import { Link } from "react-router-dom";

const HeaderRight = (props) => {
  return (
    <div className="header-right">
      <nav style={props.style} className="mobile-nav-links">
        <span>
          <a href="/pricing">Pricing</a>
        </span>
        <span>
          <a href="/features">Features</a>
        </span>
        <span>
          <a href="/login">Login</a>
        </span>
        <span>
          <Link to="/signup">
            <a href="/signUp">Sign Up</a>
          </Link>
        </span>
      </nav>
      <nav className="nav-links">
        <span>
          <a href="/pricing">Pricing</a>
        </span>
        <span>
          <a href="/features">Features</a>
        </span>
        <span>
          <a href="/login">Login</a>
        </span>
        <span>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default HeaderRight;
