import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddJobsApi } from "./modules/actions";
import { Link } from "react-router-dom";

export default function AddJobsPage() {
    const dispatch = useDispatch();
  const [state, setState] = useState({
    //ko có image ?
    name: "",
    rating: "",
    price: "",
    // proServices : true,
    // localSellers : false,
    // onlineSellers : true,
    // deliveryTime : true,
    type : "", //ID 
    subType : "",
  });
  //!chọn checkbox -> nhập ID (id thuộc công việc chính, phụ của từng loại công việc khác nhau) --> add zô danh sách loại công việc có id riêng đó
 
  const addJobs = (event) => {
      event.preventDefault();
      dispatch(actAddJobsApi(state));
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleCheckBox = (event) => {
    const {name, checked} = event.target;
    setState({
      ...state,
      [name]: checked,
    })
  }

  return (
    <div className="container">
      <h3>AddJobsPage</h3>

      <form onSubmit={addJobs}>
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
          <label>Rating</label>
          <div className="col-sm-1-12">
            <input
              type="number"
              className="form-control"
              name="rating"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label>Price</label>
          <div className="col-sm-1-12">
            <input
              type="number"
              className="form-control"
              name="price"
              onChange={handleOnChange}
            />
          </div>
        </div>

{/* type thì subType sẽ disabled?? => check actions */}
        <div className="form-group row">
          <label>Type</label>
          <div className="col-sm-1-12">
            <input
              type="checkbox"
              className="form-control"
              name="type"
              checked={state.type}
              onChange={handleCheckBox}
              id="btnType"
            />
          </div>
        </div>

        <div className="form-group row">
          <label>SubType</label>
          <div className="col-sm-1-12">
            <input
              type="checkbox"
              className="form-control"
              name="subType"
              checked={state.subType}
              onChange={handleCheckBox}
            />
          </div>
        </div>

        <button className="btn btn-success">Add Job</button>
        <Link to="/list-jobs" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
}
