import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__buttons">
        <Link to="/random">
          <button>RANDOM</button>
        </Link>
        <Link to="bespoke">
          <button>BESPOKE</button>
        </Link>
        <Link to="/endless">
          <button>ENDLESS</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
