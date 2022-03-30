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
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

const checkEmpty = (value) => {
  let error;
  if(!value){
    error = "Không được để trống";
  }else if(value.trim() != ""){
    error = ""
  }
  return error;
}
const checkName = (value) => {
  let error;
  var pattern = "[A-Za-z]{1,32}";
  var reg = new RegExp(pattern);
  if(reg.test(value)){
    error = ""
  }else{
     error = "Tên phải là kiểu chữ bao gồm hoa và thường, từ 1 đến 32 kí tự"
  }
  return error;
}
const checkEmail = (value) => {
  let error;
  var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  if(value.match(pattern)){
    error = ""
  }else{
   error = "Email phải đúng định dạng" 
  }
  return error;
}
const checkPhoneNumber= (value) => {
  let error;
  var pattern = "[789][0-9]{9}";
  if(value.match(pattern)){
    error = ""
  }else{
   error = "Chỉ được có số"; 
  }
  return error;
}
const checkPassword = (value) => {
  let error;
  var pattern = "/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g";
  if(value.match(pattern)){
    error = ""
  }else{
   error = "Password phải đúng định dạng"; 
  }
  return error;
}
// const checkBirthday = ($date, $format = 'd/m/Y') => {
//   let error;
//   var pattern = "/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g";
//   if($date.match(pattern)){
//     $d = DateTime::createFromFormat($format, $date);
//     return $d && $d->format($format) == $date && $d->format('Y') <= 2010;
//   }else{
//    error = "Phải chọn Birthday"; 
//   }
//   return error;
// }
 const checkSelect = (select) => {
   let error;
  if(document.getElementsByName(select).selectedIndex != 0){
    error = ""
  }else{
    error = "Gender phải được chọn"
  }
  return error;
}

export default function SignUpPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    skill: [],
    certification: [],
    birthday: "",
    gender: true,
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
    dispatch(actSignUpApi(state, history));
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
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              phone: "",
              skill: [],
              certification: [],
              birthday: "",
              gender: true,
            }}
          >
            {({ errors, touched }) => (
              <form onSubmit={handleSignUp}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h3">
                    Create new account
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                    sx={{ ml: 0.5 }}
                  >
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
                  validate={checkEmpty && checkName}
                  error={Boolean(touched.name && errors.name)} 
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  onChange={handleOnChange}
                  variant="outlined"
                  type="email"
                  validate={checkEmpty && checkEmail}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  onChange={handleOnChange}
                  variant="outlined"
                  type="password"
                  validate={checkEmpty && checkPassword}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="normal"
                  name="phone"
                  onChange={handleOnChange}
                  variant="outlined"
                  type="number"
                  validate={checkEmpty && checkPhoneNumber}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
                <TextField
                  fullWidth
                  label="Skill"
                  margin="normal"
                  name="skill"
                  onChange={handleOnChange}
                  variant="outlined"
                  type="text"
                  validate={checkEmpty}
                  error={Boolean(touched.skill && errors.skill)}
                  helperText={touched.skill && errors.skill}
                />
                <TextField
                  fullWidth
                  label="Certification"
                  margin="normal"
                  name="certification"
                  onChange={handleOnChange}
                  variant="outlined"
                  type="text"
                  validate={checkEmpty}
                  error={Boolean(touched.certification && errors.certification)}
                  helperText={touched.certification && errors.certification}
                />
                <TextField
                  fullWidth
                  // label="Birthday"
                  margin="normal"
                  name="birthday"
                  onChange={handleOnChange}
                  variant="outlined"
                  type="date"
                  validate={checkEmpty}
                  error={Boolean(touched.birthday && errors.birthday)}
                  helperText={touched.birthday && errors.birthday}
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
                    validate={checkSelect}
                    error={Boolean(touched.gender && errors.gender)}
                  helperText={touched.gender && errors.gender}
                  >
                    <MenuItem value={true}>Men</MenuItem>
                    <MenuItem value={false}>Women</MenuItem>
                  </Select>
                </FormControl>

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
                    to="/signin"
                    variant="h6"
                    underline="hover"
                  >
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
}
