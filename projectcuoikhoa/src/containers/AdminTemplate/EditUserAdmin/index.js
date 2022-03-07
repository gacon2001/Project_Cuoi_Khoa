import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditUserApi, actFetchDetailUserApi } from "./modules/actions";

export default function EditUserAdmin() {
  const dispatch = useDispatch();
  const {_id} = useParams();//route có /biến id => lấy id phải dùng useParams()
  const detailUser = useSelector((state)=>{return state.editUserReducer.detailUser});//edit và detail dùng chung data đc ko? hay phải chia riêng editUser và detailUser
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: false,
    // role: "",
    // __v: "",
    // avatar: "",
  })

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setState({
      ...state,
      [name]: value,
    })
  };
  const handleSelect = (event) => {
    const {name, select} = event.target;
    setState({
      ...state,
      [name]: select,
    })
  }

  const updateUser = (event) => {
    event.preventDefault();
    dispatch(actEditUserApi(_id))
  };

  useEffect(()=>{
    dispatch(actFetchDetailUserApi(_id))
  }, []);

  return (
    <>
      <h3>EditUserAdmin</h3>
      <div className="container">
        <form onSubmit={updateUser}>
          <div className="form-group row">
            <label>Name</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleOnChange}
                value={state.name}
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
                value={state.email}
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
                value={state.password}
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
                value={state.phone}
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
                value={state.birthday}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-1-12">
            <label>Gender</label>
                <select className="form-control" name="gender" onChange={handleSelect} value={state.gender} >
                  <option>Men</option>
                  <option>Women</option>
                  <option>Another gender</option>
                </select>
            </div>
          </div>

          {/* <div className="form-group row">
            <label>Role</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="role"
                onChange={handleOnChange}
                value={state.role}
              />
            </div>
          </div> */}
{/* 
          <div className="form-group row">
            <label>__V</label>
            <div className="col-sm-1-12">
              <input
                type="number"
                className="form-control"
                name="__v"
                onChange={handleOnChange}
                value={state.__v}
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
                value={state.avatar}
              />
            </div>
          </div> */}
          
        <button className="btn btn-success">Update User</button>
        </form>
      </div>
    </>
  );
}
