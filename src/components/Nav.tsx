import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__buttonsWrapper">
        <Link to="/random">
          <div className="nav__button">Random</div>
        </Link>
        <Link to="bespoke">
          <div className="nav__button">Bespoke</div>
        </Link>
        <Link to="/endless">
          <div className="nav__button">Endless</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
