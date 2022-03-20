import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actSearchJobsApi } from "../ListJobsPage/modules/actions";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function SearchJobsPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    search: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  // useEffect(() => {
    // dispatch(actSearchJobsApi(state.search));
  // }, [state.search]);

  return (
      <Stack  sx={{ width: "100%", mt: 2} } >
        <TextField
          label="Search jobs"
          type="search"
          name="search"
          onChange={handleOnChange}
        />
      </Stack>
  );
}
