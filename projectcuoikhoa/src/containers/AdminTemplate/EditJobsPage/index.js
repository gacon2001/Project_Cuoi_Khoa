import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditJobsApi, actFetchDetailJobsApi } from "./modules/actions";

export default function EditJobsPage() {
    const dispatch = useDispatch();
    const {_id} = useParams();
    const detailJobs = useSelector((state)=> state.editJobsReducer.detailJobs);

  const [state, setState] = useState({
    image:"",
    name: "",
    rating: "",
    price: "",
    // proServices : true,
    // localSellers : false,
    // onlineSellers : true,
    // deliveryTime : true,
    // type : "",
    // subType : ""
  });

  useEffect(()=>{
    if( detailJobs !== null)
    setState(detailJobs)
  }, [detailJobs]);

  useEffect(()=>{
    dispatch(actFetchDetailJobsApi(_id));
}, [])

  const updateJobs = (event) => {
      event.preventDefault();
      dispatch(actEditJobsApi(_id));
  }

  const handleOnChange = (event) => {
      const {name, value} = event.target;
      setState({
          ...state,
          [name]: value,
      })
  }


  return (
    <div>
      <h3>EditJobsPage</h3>

      <div className="container">
        <form onSubmit={updateJobs}>
        <div className="form-group row">
            <label>Image</label>
            <div className="col-sm-1-12">
              <input
                type="filename"
                className="form-control"
                name="image"
                onChange={handleOnChange}
                value={state.image}
              />
            </div>
          </div>
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
            <label>Rating</label>
            <div className="col-sm-1-12">
              <input
                type="number"
                className="form-control"
                name="rating"
                onChange={handleOnChange}
                value={state.rating}
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
                value={state.price}
              />
            </div>
          </div>
          
        <button className="btn btn-success">Update Jobs</button>
        </form>
      </div>
    </div>
  );
}
