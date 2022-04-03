import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../HomePage/Footer";
import TypeJobs from "../Typejobs";
import { Link } from "react-router-dom";
import SearchJobs from "./SearchJobs";
import { actListworksApi } from "./modules/action";
export default function ListWorks() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };
  const { type } = useParams();
  //cho nay, minh lay tu route qua cho comp nay
  const listworks = useSelector((state) => state.listWorksReducer.data);
  useEffect(() => {
    dispatch(actListworksApi(type));
  }, []);
  const renderListWorks = () => {
    return listworks?.map((jobs) => {
      return <SearchJobs key={jobs._id} jobs={jobs} />;
      //truyen vao day de render ra cai api
    });
  };
  return (
    <>
      <div className="container ">
        <nav className="navbar  navbar-expand-xl d-flex justify-content-between">
          <a className="navbar-brand text-dark fiverr__logo" href="/">
            Fiverr.
          </a>
          <div className="overlay__search typejobs">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="inputWork"
              onChange={handleOnChange}
            />
            <Link
              to=""
              className="btn btn-success"
              type="button"
              to={`/listworks/${search}`}
            >
              Search
            </Link>
          </div>
          <ul className=" navbar-nav fiverr_navBarMenu">
            <li className="nav-item">
              <a className="nav-link text-dark " href="#">
                Become a seller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Sign in
              </a>
            </li>
            <form className="form-inline my-2 my-lg-0">
              <button
                className=" btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Join
              </button>
            </form>
          </ul>
        </nav>
      </div>
      <TypeJobs />
      <div className="listworks">
        {/* tại chỗ kia ko có đống này nè ông. */}
        <div className="listworks__content">{renderListWorks()}</div> 
      </div>
      <Footer />
    </>
  );
}
