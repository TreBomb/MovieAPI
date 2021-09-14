import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div id="navbar">
            <NavLink className="nav-button" exact to="/">Home</NavLink>
            <NavLink className="nav-button" to="/popular">Most Popular</NavLink>
            <NavLink className="nav-button" to="/all">All</NavLink>
        </div>
    )
}

export default NavBar;