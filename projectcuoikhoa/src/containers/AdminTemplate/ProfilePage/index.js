import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  actAddCertificationsApi,
  actAddSkillsApi,
  actFetchDetailAdminLoginApi,
  actUploadAvatarApi,
} from "./modules/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const {_id} = useParams();
  const [state, setState] = useState({
    avatar: "",
    skill: [],
    certification: [],
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true,
  });

  const addSkills = (event) => {
    event.preventDefault();
    dispatch(actAddSkillsApi(_id));
  };
  const addCertifications = (event) => {
    event.preventDefault();
    dispatch(actAddCertificationsApi(_id));
  };

  const renderSkillsAvailable = () => {
    return ((skill)=>{
      return (
        <p>{skill.skill}</p>
      )
    })
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(actUploadAvatarApi(state.ava));
    dispatch(actFetchDetailAdminLoginApi(_id));
  }, []);

  return (
    <div>
      <h3>ProfilePage</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-1-12">
            <div className="card text-left">
              {/* <img className="card-img-top" src="" alt />  */}
              <input type="file" onChange={handleOnChange} />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                {/* <i className="fa fa-pen" /> */}
                <Link to="/edit-profile" className="btn btn-warning">
                  Edit
                </Link>
                <hr />

                <div>
                  <ul>
                    <li>
                      <span>Name: {state.name}</span>
                    </li>
                    <li>Email: {state.email}</li>
                    <li>Phone: {state.phone}</li>
                    <li>Birthday: {state.birthday}</li>
                    <li>Gender: {state.gender}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card text-left">
              <div className="card-body">
                <hr />
                <form onSubmit={addSkills}>
                  <div className="form-group">
                    <label>Skills</label>
                    <div className="col-sm-1-12">
                      {/* render skills có sẵn */}
                      {renderSkillsAvailable()}
                      <input
                        type="text"
                        className="form-control"
                        name="skill"
                        placeholder="Skills"
                        onChange={handleOnChange}
                        value={state.skill}
                      />
                    </div>
                  </div>

                  <button className="btn btn-success">Add</button>
                  <button className="btn btn-secondary">Cancel</button>
                </form>
                <hr />
                <form onSubmit={addCertifications}>
                  <div className="form-group">
                    <label>Certifications</label>
                    <input
                      type="text"
                      className="form-control"
                      name="certification"
                      placeholder="Certifications"
                      onChange={handleOnChange}
                      value={state.certification}
                    />
                  </div>
                  <button className="btn btn-success">Add</button>
                  <button className="btn btn-secondary">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
