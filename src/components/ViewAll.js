import React from "react";
import { NavLink } from "react-router-dom";

function ViewAll({ section }) {
  let location;

  switch(section) {
    case "Now Playing":
      location="/playing";
      break;
    case "Most Popular":
      location="/popular";
      break;
    default:
      location="/";
  }
  return(
    <NavLink className="nav-button" exact to={location}>
      <button className="view-all">View All</button>
    </NavLink>
  );
  }


export default ViewAll;