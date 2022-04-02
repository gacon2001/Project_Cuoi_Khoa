import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  InputLabel,
  Link as MLink,
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
import { useHistory, Link } from "react-router-dom";
import { Formik } from "formik";

const checkEmpty = (value) => {
  let error;
  //skill: []
  console.log(value.length);
  if (!value || value.length === 0) {
    console.log("pssword in here");
    error = "Không được để trống";
  } else if (typeof value === "string" && value.trim() != "") {
    error = "";
  }
  return error;
};
const checkName = (value) => {
  let error;
  var pattern = /(?=([a-z][A-Z]{1,32}$|[A-Z][a-z]{1,32}$))/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    console.log(value.match(pattern));
    error = "";
  } else {
    error = "Tên phải là kiểu chữ bao gồm hoa và thường, từ 1 đến 32 kí tự";
  }
  return error;
};
const checkEmail = (value) => {
  let error;
  var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    console.log(value.match(reg));
    error = "";
  } else {
    error = "Email phải đúng định dạng a@gmail.com";
  }
  return error;
};
const checkPhoneNumber = (value) => {
  let error;
  var pattern = /^\d{10}$/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error = "Phone tối đa 10 số";
  }
  return error;
};
const checkPassword = (value) => {
  let error;
  var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  var reg = new RegExp(pattern);
  if (reg.test(value)) {
    error = "";
  } else {
    error =
      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  }
  return error;
};
// const checkSelect = (select) => {
//   let error;
//   if (document.getElementsByName(select).selectedIndex != 0) {
//     error = "";
//   } else {
//     error = "Gender phải được chọn";
//   }
//   return error;
// }

export default function SignUpPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   skill: [],
  //   certification: [],
  //   birthday: "",
  //   gender: null,
  //   policy: "",
  // });
  //handleOnChange lấy gtri ko cần -> handleChange mặc định của formik.

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
              gender: "",
              policy: false,
            }}
            validate={async (values) => {
              const errors = {};
              // chỗ này là validation cho name
              const nameErrors =
                checkEmpty(values.name) || checkName(values.name); //check nếu tên trống thì trả về lỗi tên trống, còn tên không trống thì check tiếp tên có valid hay ko, nếu không valid thì trả về lỗi tên ko valid
              errors.name = nameErrors; // gán lỗi cho name
              errors.email =
                checkEmpty(values.email) || checkEmail(values.email);
              console.log("bengin password");
              errors.password =
                checkEmpty(values.password) || checkPassword(values.password);
              console.log("end password");
              errors.phone =
                checkEmpty(values.phone) || checkPhoneNumber(values.phone);
              errors.skill = checkEmpty(values.skill);
              errors.certification = checkEmpty(values.certification);
              errors.birthday = checkEmpty(values.birthday);
              errors.gender = checkEmpty(values.gender);
              if (values.policy == false) {
                errors.policy = "This field must be checked";
              }
              return errors; // trả về lỗi sau khi validate
            }}
            //kích hoạt sự kiện onSubmit -> return hết những cái bên dưới ->
            onSubmit={(values) => {
              dispatch(actSignUpApi(values, history));
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
                    >
                      <MenuItem value={true}>Men</MenuItem>
                      <MenuItem value={false}>Women</MenuItem>
                    </Select>
                  </FormControl>
                  <span>{touched.gender && errors.gender}</span>

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
                      onChange={handleChange}
                    />
                    <Typography color="textSecondary" variant="body1">
                      I have read the
                      <MLink color="primary" underline="always" variant="h6">
                        <Link to="#">Terms and Conditions</Link>
                      </MLink>
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
                    <MLink component={Link} to="/signin" variant="h6" underline="hover">
                      Sign in
                    </MLink>
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
