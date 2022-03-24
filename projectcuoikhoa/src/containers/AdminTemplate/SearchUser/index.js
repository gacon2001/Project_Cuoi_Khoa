import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actSearchUserApi } from "../ListUser/modules/actions";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

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
    <Stack  sx={{ width: "100%", mt: 2} } >
        <TextField
          label="Search User"
          type="search"
          name="search"
          onChange={handleOnChange}
        />
      </Stack>
  );
}
