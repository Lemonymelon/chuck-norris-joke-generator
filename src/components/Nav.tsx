import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__buttons">
        <Link to="/random">
          <div>RANDOM</div>
        </Link>
        <Link to="bespoke">
          <div>BESPOKE</div>
        </Link>
        <Link to="/endless">
          <div>ENDLESS</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
