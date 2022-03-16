import React from "react";
function Navbar() {
  return (
    <>
      <div className=" navbar-light bg-light fiverr_navBar">
        <div className="container ">
          <nav class="navbar navbar-expand-xl d-flex justify-content-between">
            <a class="navbar-brand" href="#">
              Fiverr <span className="fiverr__logo">.</span>
            </a>
            <ul class=" navbar-nav fiverr_navBarMenu">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Become a seller
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign in
                </a>
              </li>
              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-success my-2 my-sm-0" type="submit">
                  Join
                </button>
              </form>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;
