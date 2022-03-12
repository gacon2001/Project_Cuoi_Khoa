import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import DashboardNavbar from "../DashboardPage/components/DashboardNavbar";
import { actLoginApi } from "./modules/actions";

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLoginApi(state,history ));
  };

  return (
    <div>
      {/* <DashboardNavbar/> */}
      <h1>LoginPage</h1>
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="form-group row">
            <label>Email</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label>Password</label>
            <div className="col-sm-1-12">
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button className="bnt btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}
