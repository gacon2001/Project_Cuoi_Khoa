import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarJobs() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light navBarJobs">
      <a className="navbar-brand" href="#">
        NavbarJobs
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active mr-2 mb-2">
            <NavLink to="/list-jobs">ListJobs</NavLink>
          </li>
          <li className="nav-item mr-2 mb-2">
            <NavLink to="/list-subType-jobs">ListSubTypeJobs</NavLink>
          </li>
          <li className="nav-item mr-2">
            <NavLink to="/list-type-jobs">ListTypeJobs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/list-booking-jobs">ListBookingJobs</NavLink>
          </li>
        </ul>
      </div>
      <Box sx={{ flexGrow: 1 }} />
    </nav>
  );
}

