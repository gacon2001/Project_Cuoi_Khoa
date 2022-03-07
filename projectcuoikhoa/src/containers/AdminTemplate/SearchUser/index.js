import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actSearchUserApi } from "../ListUser/modules/actions";

export default function SearchUser() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ search: "" });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(state);
    dispatch(actSearchUserApi(state.search));
  }, [state.search]);

  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        name="search"
        onChange={handleOnChange}
      />
    </div>
  );
}
