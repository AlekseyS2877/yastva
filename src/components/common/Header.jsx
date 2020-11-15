import React from "react";
import { NavLink } from "react-router-dom";
import StoreLogo from "./pics/jastva.jpg";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <div>
      <div className="logo">
        <img src={StoreLogo} width="150" height="75" alt="Logo" />
      </div>
      <nav>
        <NavLink activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="/goods">
          Наши яства
        </NavLink>
        {" | "}
        <NavLink activeStyle={activeStyle} to="/about">
          О нас
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
