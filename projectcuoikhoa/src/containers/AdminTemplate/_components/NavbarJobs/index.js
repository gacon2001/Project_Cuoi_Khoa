import { Box, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types';
export default function NavbarJobs({ onMobileNavOpen , path}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
      
      {/* chỉ có list-subType với list-type mới có  side bar */}
      {path === "/list-subType-jobs" || path === "/list-type-jobs" && (
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      )}
    </nav>
  );
}

NavbarJobs.propTypes = {
  onMobileNavOpen: PropTypes.func
};
