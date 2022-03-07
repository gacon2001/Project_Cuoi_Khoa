import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actSearchJobsApi } from "../ListJobsPage/modules/actions";

export default function SearchJobsPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    search: "",
  })
  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setState({
      ...state,
      [name]: value,
    })
  };

  useEffect(()=>{
    dispatch(actSearchJobsApi(state.search));
  }, [state.search]);

  return (
    <div>
      <div className="container">
        <input
          type="text"
          className="form-control"
          name="search"
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
