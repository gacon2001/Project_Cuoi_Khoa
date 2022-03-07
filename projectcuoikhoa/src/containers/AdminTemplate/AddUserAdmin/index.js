import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actAddUserApi } from "./modules/actions";

export default function AddUserAdmin() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: "",
    role: "ADMIN",
    __v: "",
    avatar: "",
  })

    const handleOnChange = (event) => {
        const {name, value, files} = event.target;
        setState({
          ...state,
          [name]: name === "avatar" ? files[0] : value,
        })
    }

    const addUser = (event) => {
      event.preventDefault();
      dispatch(actAddUserApi(state));
    }
  return (
     <div className="container">
      <h3>AddUserAdmin</h3>
      <form onSubmit={addUser}>
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
            <div className="col-sm-1-12">
            <label>Gender</label>
                <select className="form-control" name="gender" onChange={handleOnChange}  >
                  <option>Men</option>
                  <option>Women</option>
                  <option>Another gender</option>
                </select>
            </div>
          </div>

          <div className="form-group row">
            <label>Role</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="role"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>__V</label>
            <div className="col-sm-1-12">
              <input
                type="number"
                className="form-control"
                name="__v"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Avatar</label>
            <div className="col-sm-1-12">
              <input
                type="file"
                className="form-control"
                name="avatar"
                onChange={handleOnChange}
              />
            </div>
          </div>
          
        <button className="btn btn-success">Add User</button>
        <Link to="/list-user" className="btn btn-danger">Cancel</Link>
        </form>
    </div>
  );
}
