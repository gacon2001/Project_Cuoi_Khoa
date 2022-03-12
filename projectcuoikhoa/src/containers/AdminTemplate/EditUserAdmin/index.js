import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditUserApi, actFetchDetailUserApi } from "./modules/actions";

export default function EditUserAdmin() {
  const dispatch = useDispatch();
  const { _id } = useParams(); //route có /biến id => lấy id phải dùng useParams()
  //!lấy đc r nhưng chưa hiện lên UI : => bữa hôm Hải bảo làm sao để lấy detail ra UI ấy H? tui quên mất ùi
  const detailUser = useSelector((state) => {
    return state.editUserReducer.detailUser;
  }); //edit và detail dùng chung data đc ko? hay phải chia riêng editUser và detailUser
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "123",
    birthday: "",
    gender: false,
    // role: "",
    // __v: "",
    // avatar: "",
  });

  // cái useEffect bên dưới sẽ chạy lại mỗi lần detailUser thay đổi => khi có detail thì setState lại cho component render ra giao diện
  useEffect(() => {
    // setState(detailUser)
    // tại hồi nãy tui chưa để đk !== null
    // nên cái lúc đầu detailUser bị null nên react báo lỗi á. giờ đc òi -> báo ở đâu thế H
    // cái chỗ controlled input to be uncontrolled á có nghĩa là cái input mới đầu có value là 1 chuỗi rỗng state.name = "" mà mình ko kiểm tra đk, khi detailUser = null thì cái state.name = undefined á, do detailUser = null mà null.thuoctinh => lỗi
    // nên nó dừng react lại lun á oki H
    //!sao birthday hông fecth đc H. cái birthday fetch về ko đúng format òi, v mình phải xử lý để nó đúng format, giờ có 2 cách 1: tự viết hàm, hình như lúc trc tui có chỉ r. thôi giờ tui chỉ cách 2: xài thư viện đi
    if (detailUser !== null && detailUser !== "") {
      // format đúng: yyyy-MM-dd
      // khi lấy data từ server phải format lại đúng
      const birthdayNew = moment(detailUser.birthday).format('yyyy-MM-DD');
      console.log(birthdayNew);
      setState({
        ...detailUser,
        birthday: birthdayNew
      }); // lấy lại các giá trị cũ và thay thế birthday
    }
  }, [detailUser]);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSelect = (event) => {
    const { name, select } = event.target;
    setState({
      ...state,
      [name]: select,
    });
  };

  const updateUser = (event) => {
    event.preventDefault();

    // chỗ này truyền vào cái object cần gửi lên api
    dispatch(actEditUserApi(_id, state));
  };

  useEffect(() => {
    dispatch(actFetchDetailUserApi(_id));
  }, []);
  return (
    <>
      <h3>EditUserAdmin</h3>
      <div className="container">
        <form onSubmit={updateUser}>
          <div className="form-group row">
            <label>Name</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleOnChange}
                value={state.name}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Email</label>
            <div className="col-sm-1-12">
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleOnChange}
                value={state.email}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Password</label>
            <div className="col-sm-1-12">
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleOnChange}
                value={state.password}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Phone Number</label>
            <div className="col-sm-1-12">
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={handleOnChange}
                value={state.phone}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Birthday</label>
            <div className="col-sm-1-12">
              <input
                type="date"
                className="form-control"
                name="birthday"
                onChange={handleOnChange}
                // test format của thẻ này
                // format đúng: yyyy-MM-dd
                // xong òi đó, tải thử viện moment.js về rồi format thôi
                value={state.birthday}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-1-12">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                onChange={handleSelect}
                value={state.gender}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Another gender</option>
              </select>
            </div>
          </div>

          {/* <div className="form-group row">
            <label>Role</label>
            <div className="col-sm-1-12">
              <input
                type="text"
                className="form-control"
                name="role"
                onChange={handleOnChange}
                value={state.role}
              />
            </div>
          </div> */}
          {/* 
          <div className="form-group row">
            <label>__V</label>
            <div className="col-sm-1-12">
              <input
                type="number"
                className="form-control"
                name="__v"
                onChange={handleOnChange}
                value={state.__v}
              />
            </div>
          </div>

          <div className="form-group row">
            <label>Avatar</label>
            <div className="col-sm-1-12">
              <input
                type="file"
                className="form-control"
                name="avatar"
                onChange={handleOnChange}
                value={state.avatar}
              />
            </div>
          </div> */}

          <button className="btn btn-success">Update User</button>
        </form>
      </div>
    </>
  );
}
