import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actSignUpApi } from "./modules/actions";

export default function SignUpPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    skill: [],
    certification: [],
    birthday: "",
    gender: false,
    type: "ADMIN",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSelect = (event) => {
      const {name, select} = event.target;
      setState({
          ...state,
          [name]: select,
      })
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(actSignUpApi(state));
  };
  

  return (
    <div>
      <h1>SignUpPage</h1>

      <div className="container">
        <form onSubmit={handleSignUp}>
          <div className="form-group row">
            <label>Name</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Email</label>
            <div className="col-sm-1-12">
              <input
                type="email"
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

          <div className="form-group row">
            <label>Phone Number</label>
            <div className="col-sm-1-12">
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Skill</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="skill"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Certification</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="certification"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Birthday</label>
            <div className="col-sm-1-12">
              <input
                type="date"
                className="form-control"
                name="birthday"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Gender</label>
            <div className="col-sm-1-12">
              <select
                className="form-control"
                name="gender"
                onChange={handleSelect}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Another gender</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label>Type</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="type"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button className="btn btn-success">SignUp</button>
          <Link to="/login" className="btn btn-info">SignIn</Link>
        </form>
      </div>
    </div>
  );
}
