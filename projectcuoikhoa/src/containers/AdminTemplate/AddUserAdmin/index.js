import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actAddUserApi } from "./modules/actions";

import { Container, Typography, Box, TextField } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddUserAdmin() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "ADMIN",
    skill: [],
    certification: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      // [name]: name === "avatar" ? files[0] : value,
      [name]: value,
    });
  };

  const addUser = (event) => {
    event.preventDefault();
    dispatch(actAddUserApi(state));
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={addUser}>
        <Box>
          <Typography variant="h4">AddUserAdmin</Typography>
        </Box>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          name="name"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          name="email"
          onChange={handleOnChange}
          variant="outlined"
          type="email"
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          name="password"
          onChange={handleOnChange}
          variant="outlined"
          type="password"
        />
        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          name="phone"
          onChange={handleOnChange}
          variant="outlined"
          type="number"
        />
        <TextField
          fullWidth
          // label="Birthday"
          margin="normal"
          name="birthday"
          onChange={handleOnChange}
          variant="outlined"
          type="date"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            name="gender"
            onChange={handleOnChange}
          >
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>Another gender</MenuItem>
          </Select>
        </FormControl>

        {/* cố định ADMIN */}
        <TextField
          fullWidth
          label="Role"
          margin="normal"
          name="role"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Skill"
          margin="normal"
          name="skill"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Certification"
          margin="normal"
          name="certification"
          onChange={handleOnChange}
          variant="outlined"
          type="text"
        />

        <button className="btn btn-success">Add User</button>
        <Link to="/list-user" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </Container>
  );
}
