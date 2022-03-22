import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { actSignUpApi } from "./modules/actions";

export default function SignUpPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    skill: [],
    certification: [],
    birthday: "",
    gender: true,
    role: "ADMIN",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(actSignUpApi(state));
  };

  return (
    <>
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
        <Container maxWidth="sm">
          <form onSubmit={handleSignUp}>
            <Box sx={{ mb: 3 }}>
              <Typography color="textPrimary" variant="h3">
                Create new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2" sx={{ ml: 0.5}}>
                Use your email to create new account
              </Typography>
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
              <InputLabel>Gender</InputLabel>
              <Select
                // fullWidth
                // label="Gender"
                margin="normal"
                name="gender"
                onChange={handleOnChange}
                variant="outlined"
              >
                <MenuItem value={true}>Men</MenuItem>
                <MenuItem value={false}>Women</MenuItem>
              </Select>
            </FormControl>

            {/* muốn cố định là ADMIN luôn??? */}
            <TextField
              fullWidth
              label="Role"
              margin="normal"
              name="role"
              onChange={handleOnChange}
              variant="outlined"
              type="text"
            />

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign up now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Have an account?
              <Link
                // component={RouterLink}
                to="/login"
                variant="h6"
                underline="hover"
              >
                Sign in
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
      {/* <div className="container">


          <div className="form-group row">
            <label>Type</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="type"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <button className="btn btn-success">SignUp</button>
          <Link to="/login" className="btn btn-info">SignIn</Link>
        </form>
      </div> */}
    </>
  );
}
