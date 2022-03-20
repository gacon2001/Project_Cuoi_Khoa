import { Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SearchUser from "../SearchUser";
import { actDeleteUserApi, actFetchListUserApi } from "./modules/actions";

import { styled } from "@mui/system";
const Root = styled("div")(
  ({ theme }) => `
    table {
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 2px solid ${
        theme.palette.mode === "dark" ? grey[800] : grey[200]
      };
      text-align: left;
      padding: 6px;
    }
  
    tr {
      background-color: ${
        theme.palette.mode === "tr" ? grey[900] : grey[50]
      // };
    }
    `
);
const grey = {
  // 50: "#F3F6F9",
  50: "#ffffff",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

export default function ListUser() {
  const listUser = useSelector((state) => state.fetchListUserReducer.listUser);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(actFetchListUserApi());
  }, []);

  const renderListUser = () => {
    return listUser?.map((user) => {
      return (
        <tr key={user._id}>
          <th>{user._id}</th>
          <th>{user.name}</th>
          <th>{user.email}</th>
          <th>{user.password}</th>
          <th>{user.phone}</th>
          <th>{user.birthday}</th>
          <th>{user.gender ? "Men" : "Women"}</th>
          <th>{user.role}</th>
          <th>{user.__v}</th>
          <th>{user.avatar}</th>
          <th>
            <button
              className="btn btn-success"
              onClick={() => history.push(`edit-user/${user._id}`)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(actDeleteUserApi(user._id))}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4">ListUser</Typography>
      {/* <button className="btn btn-sucess" onClick={()=> history.push("/add-user-admin")}>Thêm Quản Trị</button> */}
      <Link to="/add-user-admin" className="btn btn-success">
        Thêm Quản Trị
      </Link>
      <SearchUser />

      <Root sx={{ width: 500, maxWidth: "100%" }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Role</th>
              <th>__V</th>
              <th>Avatar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {renderListUser()}
          </tbody>
        </table>
      </Root>
    </Container>
  );
}
