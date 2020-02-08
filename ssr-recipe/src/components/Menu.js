import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/red">RED</Link>
      </li>
      <li>
        <Link to="/blue">BLUE</Link>
      </li>
    </ul>
  );
};

export default Menu;
