import React from "react";
function Navbar() {
  return (
    <>
      <div className=" fiverr_navBar">
        <div className="container ">
          <nav className="navbar navbar-expand-xl d-flex justify-content-between">
            <a className="navbar-brand fiverr__logo" href="#">
              Fiverr.
            </a>
            <ul className=" navbar-nav fiverr_navBarMenu">
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Become a seller
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign in
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Admin
                </a>
              </li>
              <form className="form-inline my-2 my-lg-0">
                <button className=" navBar__btn my-2 my-sm-0" type="submit">
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
