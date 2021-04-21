import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <div className="header-content">
        <nav>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/idea">
            <li>Ideas</li>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
