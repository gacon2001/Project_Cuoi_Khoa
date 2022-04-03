import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditProfileApi, actFetchDetailProfileApi } from "./modules/actions";

import moment from "moment";

import {
  Box,
  Container,
  Typography,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";

export default function EditProfilePage() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailProfile = useSelector(
    (state) => state.editProfileReducer.detailProfile
  );
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

  useEffect(() => {
    if (detailProfile !== null) {
      const birthdayNew = moment(detailProfile.birthday).format("yyyy-MM-DD");
      setState({
        ...detailProfile,
        birthday: birthdayNew,
      });
    }
  }, [detailProfile]);

  useEffect(() => {
    // console.log(_id);
    dispatch(actFetchDetailProfileApi(_id));
  }, []);

  const updateProfile = (event) => {
    event.preventDefault();
    // nếu mà state.skill đang là chữ => convert qua array
    if (state.skill == "string") {
      state.skill = JSON.parse("[" + state.skill + "]");
    }
    // nếu mà state.cert.... đang là chữ => convert qua array
    if (state.certification == "string") {
      state.certification = JSON.parse("[" + state.certification + "]");
    }
    dispatch(actEditProfileApi(_id, state));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        mt: 10,
      }}
    >
      <Container maxWidth="md">
        <form onSubmit={updateProfile}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4">EditProfilePage</Typography>
          </Box>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            name="name"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.name}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleOnChange}
            variant="outlined"
            type="email"
            value={state.email}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleOnChange}
            variant="outlined"
            type="password"
            value={state.password}
          />
          <TextField
            fullWidth
            label="Phone Number"
            margin="normal"
            name="phone"
            onChange={handleOnChange}
            variant="outlined"
            type="number"
            value={state.phone}
          />
          <TextField
            fullWidth
            margin="normal"
            name="birthday"
            onChange={handleOnChange}
            variant="outlined"
            type="date"
            value={state.birthday}
          />
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              // fullWidth
              // label="Gender"
              margin="normal"
              name="gender"
              onChange={handleOnChange}
              variant="outlined"
              value={state.gender}
            >
              <MenuItem value={true}>Men</MenuItem>
              <MenuItem value={false}>Women</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Skills"
            margin="normal"
            name="skill"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.skill}
          />
          <TextField
            fullWidth
            label="Certification"
            margin="normal"
            name="certification"
            onChange={handleOnChange}
            variant="outlined"
            type="text"
            value={state.certification}
          />
          <Button
            sx={{ mt: 2 }}
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Update Profile
          </Button>
        </form>
      </Container>
    </Box>
  );
}
