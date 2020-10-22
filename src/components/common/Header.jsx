import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
   const activeStyle = { color: "orange" };
   return (
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
   );
}

export default Header;
