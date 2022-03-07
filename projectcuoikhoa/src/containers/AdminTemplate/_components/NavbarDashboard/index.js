import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarDashboard() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavbarDashboard
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
          <li className="nav-item active">
          <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/list-user">ListUser</NavLink>
            <NavLink to="/list-jobs">ListJobs</NavLink>
            <NavLink to="/list-subType-jobs">ListSubTypeJobs</NavLink>
            <NavLink to="/list-type-jobs">ListTypeJobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}