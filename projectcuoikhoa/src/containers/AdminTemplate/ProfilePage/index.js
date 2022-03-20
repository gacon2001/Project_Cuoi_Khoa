import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actAddCertificationsApi,
  actAddSkillsApi,
  actFetchDetailAdminLoginApi,
} from "./modules/actions";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Typography } from "@material-ui/core";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {_id} = useParams();
  const detailAdmin = useSelector((state)=> state.profilePageReducer.detailAdmin);
  const [state, setState] = useState({
    skill: [],
    certification: [],
    name: "",
    email: "",
    phone: "",
    birthday: "",
    gender: true,
  });

  // UI ko đổi??
  useEffect(()=>{
    if (detailAdmin)
      setState(detailAdmin);
  }, [detailAdmin]);

  useEffect(() => {
    dispatch(actFetchDetailAdminLoginApi(_id));
  }, []);

  const addSkills = (event) => {
    event.preventDefault();
    dispatch(actAddSkillsApi(_id));
  };
  const addCertifications = (event) => {
    event.preventDefault();
    dispatch(actAddCertificationsApi(_id));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  
 
  return (
    <Container maxWidth="sm" sx={{mt: 10}}>
      <Typography variant="h4">Profile Page</Typography>
          <div className="col-sm-1-12">
            <div className="card text-left">
              <div className="card-body">
                {/* <i className="fa fa-pen" /> */}
                {/* <Link to="/edit-profile" className="btn btn-warning">
                  Edit
                </Link> */}
                <button className="btn btn-warning" onClick={()=>history.push(`/edit-profile/${_id}`) }>Edit</button>
                <hr />

                <div>
                  <ul>
                    <li>
                      <span>Name: {state.name}</span>
                    </li>
                    <li>Email: {state.email}</li>
                    <li>Phone: {state.phone}</li>
                    <li>Birthday: {state.birthday}</li>
                    <li>Gender: {state.gender ? "Men" : "Women"}</li>
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
                      {/* {renderSkillsAvailable()} */}
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
                </form>
              </div>
            </div>
          </div>
    </Container>
  );
}
