import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SearchUser from "../SearchUser";
import { actDeleteUserApi, actFetchListUserApi } from "./modules/actions";

export default function ListUser() {
  const listUser = useSelector((state) => state.fetchListUserReducer.listUser);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>{
    dispatch(actFetchListUserApi()) ;
  }, [])

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
          <th>{user.gender}</th>
          <th>{user.role}</th>
          <th>{user.__v}</th>
          <th>{user.avatar}</th>
          <th>
            <button className="btn btn-success" onClick={()=> history.push(`edit-user/${user._id}`)}>Edit</button>
            <button className="btn btn-danger" onClick={()=> dispatch(actDeleteUserApi(user._id))}>Delete</button> 
          </th>
        </tr>
      );
    });
  };
  return (
    <div>
      <h3>ListUser</h3>
      {/* <button className="btn btn-sucess" onClick={()=> history.push("/add-user-admin")}>Thêm Quản Trị</button> */}
      <Link to="/add-user-admin" className="btn btn-success" >Thêm Quản Trị</Link>
      <SearchUser/>
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
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
            <tbody>{renderListUser()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
