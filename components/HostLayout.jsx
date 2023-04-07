import React from 'react';
import { Link, Outlet, NavLink} from "react-router-dom";

const HostLayout = () => {
    const activeStyle = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616",
    };

  return (
    <div>
      <header>
        <nav>
          <NavLink
            to="/host"
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/host/income"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Income
          </NavLink>
          <NavLink
            to="/host/reviews"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Reviews
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default HostLayout;