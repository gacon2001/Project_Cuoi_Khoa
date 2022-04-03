import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TypeJobs from "../";
import Footer from "../../HomePage/Footer";
import { actSubtypejobsApi } from "./modules/action";
import Sub from "./Sub";
import SubImg from "./Sub/index__Img";

import SearchJobs from "../../ListWorks/SearchJobs";
import { actListworksApi } from "../../ListWorks/modules/action";

export default function SubTypeJobs() {
  const dispatch = useDispatch();
  const subTypeJobs = useSelector((state) => state.subtypejobsReducer.data);
  const { subtype } = useParams();
  useEffect(() => {
    dispatch(actSubtypejobsApi(subtype));
  }, [subtype]);

  const renderSubTypeJobs = () => {
    return subTypeJobs?.subTypeJobs.map((sub) => {
      return <Sub key={sub._id} sub={sub} />;
    });
  };
  const renderSubTypeJobsImg = () => {
    return subTypeJobs?.subTypeJobs.map((sub) => {
      return <SubImg key={sub._id} sub={sub} />;
    });
  };

  //listwork
  // const { type } = useParams();
  // để lấy tên thì lấy ra subTypeJobs.name
  const listworks = useSelector((state) => state.listWorksReducer.data);
  useEffect(() => {
    if (subTypeJobs) // nếu có subTypJobs thì mới gọi lấy listwork về, nếu mà server tra ve api rong thi chiu
      dispatch(actListworksApi(subTypeJobs.name)); // chỗ này mình không nên lấy undefined về
  }, [subTypeJobs]);
  const renderListWorks = () => {
    return listworks?.map((jobs) => {
      return <SearchJobs key={jobs._id} jobs={jobs} />;
      //truyen vao day de render ra cai api
    });
  };
  return (
    <>
      <div>
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
              />
              <Link
                className="btn btn-success"
                // type="button"
                to={``}
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
        <div className="subtypejob__content">
          <div className="subtypejob__left">{renderSubTypeJobs()}</div>
          <div className="subtypejob__right">{renderSubTypeJobsImg()}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
