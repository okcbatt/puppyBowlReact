import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/players" className="nav-link">
        All Players
      </Link>
    </nav>
  );
};

export default NavBar;
