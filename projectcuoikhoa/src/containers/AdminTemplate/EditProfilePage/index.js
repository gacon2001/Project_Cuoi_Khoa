import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditProfileApi, actFetchDetailAdminLoginApi, actFetchDetailProfileApi } from "./modules/actions";

export default function EditProfilePage() {
  const dispatch = useDispatch();
  const {_id} = useParams();
  const detailProfile =  useSelector((state)=> state.editProfileReducer.detailProfile);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: false,
    skill: [],
    certification: [],
    role: "ADMIN",
  });

  useEffect(()=> {
    if (detailProfile !== null)
    setState(detailProfile);
  }, [detailProfile]);

  useEffect(()=>{
    console.log(_id);
    dispatch(actFetchDetailProfileApi(_id));
  }, [])

  const updateProfile = (event) => {
    event.preventDefault();
    dispatch(actEditProfileApi(_id));
  };


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



  return (
    <div>
      <h3>EditProfilePage</h3>

      <div className="container">
        <form onSubmit={updateProfile}>
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
              <select
                className="form-control"
                name="gender"
                onChange={handleSelect}
                value={state.gender}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Another gender</option>
              </select>
            </div>
          </div>

{/* edit -> lấy ra đc những skill có sẵn và những skill đc thêm? */}
          <div className="form-group row">
            <label>Skills</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="skill"
                onChange={handleOnChange}
                value={state.skill}
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
                value={state.certification}
              />
            </div>
          </div>

          <button className="btn btn-success">Update Profile</button>
        </form>
      </div>
    </div>
  );
}
