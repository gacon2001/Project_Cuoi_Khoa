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
  if (!value) {
    error = "Không được để trống";
  } else if (value.trim() != "") {
    error = "";
  }
  return error;
};
const checkName = (value) => {
  let error;
  var pattern = "[A-Za-z]{1,32}";
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error = "Tên phải là kiểu chữ bao gồm hoa và thường, từ 1 đến 32 kí tự";
  }
  return error;
};
const checkEmail = (value) => {
  let error;
  var pattern = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error = "Email phải đúng định dạng a@gmail.com";
  }
  return error;
};
const checkPhoneNumber = (value) => {
  let error;
  var pattern = "^\d{10}$";
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error = "Phone tối đa 10 số";
  }
  return error;
}
const checkPassword = (value) => {
  let error;
  var pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  }
  return error;
};
const checkSelect = (select) => {
  let error;
  if (document.getElementsByName(select).selectedIndex != 0) {
    error = "";
  } else {
    error = "Gender phải được chọn";
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
    policy: "",
  });
//handleOnChange lấy gtri ko cần -> handleChange mặc định của formik.
  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked,
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
              policy: false,
            }}
            validate={async (values) => {
              const errors = {};
              // chỗ này là validation cho name
              const nameErrors =
                checkEmpty(values.name) || checkName(values.name); //check nếu tên trống thì trả về lỗi tên trống, còn tên không trống thì check tiếp tên có valid hay ko, nếu không valid thì trả về lỗi tên ko valid
              errors.name = nameErrors; // gán lỗi cho name
              errors.email = checkEmpty(values.email) || checkEmail(values.email);
              errors.passowrd = checkEmpty(values.password) || checkPassword(values.passowrd);
              errors.phone = checkEmpty(values.phone) || checkPhoneNumber(values.phone);
              errors.skill = checkEmpty(values.skill);
              errors.certification = checkEmpty(values.certification);
              // errors.birthday 
              errors.gender = checkEmpty(values.gender) || checkSelect(values.gender);
              if (values.policy == false) {
                errors.policy = "This field must be checked";
              }
              return errors; // trả về lỗi sau khi validate
            }}
            //kích hoạt sự kiện onSubmit -> return hết những cái bên dưới -> 
            onSubmit={(values) => {
              handleSignUp(values)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => {
              console.log(errors);
              return (
                <form onSubmit={handleSubmit}>
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
                  {/* chỗ này để kích hoạt sự kiện touch của formik là mình phải dùng component Field của formik. Hoặc là tự động kích hoạt sự kiện = code. Do Vân đang dùng TextField nên chắc mình sẽ kích hoạt = code => dùng onBlur */}
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="email"
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="password"
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Phone Number"
                    name="phone"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="number"
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Skill"
                    name="skill"
                    value={values.skill}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    error={Boolean(touched.skill && errors.skill)}
                    helperText={touched.skill && errors.skill}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Certification"
                    name="certification"
                    value={values.certification}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    error={Boolean(
                      touched.certification && errors.certification
                    )}
                    helperText={touched.certification && errors.certification}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    name="birthday"
                    value={values.birthday}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    variant="outlined"
                    type="date"
                    error={Boolean(touched.birthday && errors.birthday)}
                    helperText={touched.birthday && errors.birthday}
                  />
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      fullWidth
                      name="gender"
                      value={values.gender}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="outlined"
                      error={Boolean(touched.gender && errors.gender)}
                      helperText={touched.gender && errors.gender}
                    >
                      <MenuItem value={true}>Men</MenuItem>
                      <MenuItem value={false}>Women</MenuItem>
                    </Select>
                  </FormControl>

                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      ml: -1,
                    }}
                  >
                    <Checkbox
                      checked={values.policy}
                      name="policy"
                      value={values.policy}
                      onBlur={handleBlur}
                      onChange={handleCheckBox}
                    />
                    <Typography color="textSecondary" variant="body1">
                      I have read the
                      <Link
                        color="primary"
                        to="#"
                        underline="always"
                        variant="h6"
                      >
                        Terms and Conditions
                      </Link>
                    </Typography>
                  </Box>
                  {Boolean(touched.policy && errors.policy) && (
                    <FormHelperText error>{errors.policy}</FormHelperText>
                  )}

                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
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
                      to="/signin"
                      variant="h6"
                      underline="hover"
                    >
                      Sign in
                    </Link>
                  </Typography>
                </form>
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
}
