import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      {/* whole nav */}
      <div>
        {/* button area */}
        <Link to="/random">
          <button>RANDOM</button>
        </Link>
        <Link to="bespoke">
          <button>CUSTOM</button>
        </Link>
        <Link to="/endless">
          <button>ENDLESS</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
