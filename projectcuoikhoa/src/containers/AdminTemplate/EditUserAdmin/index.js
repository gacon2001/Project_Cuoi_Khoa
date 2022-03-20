import { Box, Container, Typography, TextField , Button} from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actEditUserApi, actFetchDetailUserApi } from "./modules/actions";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    phone: "",
    birthday: "",
    gender: false,
    __v: "",
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
      const birthdayNew = moment(detailUser.birthday).format("yyyy-MM-DD");
      console.log(birthdayNew);
      setState({
        ...detailUser,
        birthday: birthdayNew,
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
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={updateUser}>
        <Box>
          <Typography variant="h4">EditUserAdmin</Typography>
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
            // label="Birthday"
            margin="normal"
            name="birthday"
            onChange={handleOnChange}
            variant="outlined"
            type="date"
            // test format của thẻ này
            // format đúng: yyyy-MM-dd
            // xong òi đó, tải thử viện moment.js về rồi format thôi
            value={state.birthday}
          />

          {/* ko lấy đc value??? */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
              name="gender"
              onChange={handleOnChange}
              value={state.gender ? "Men" : "Women"}
            >
              <MenuItem>Men</MenuItem>
              <MenuItem>Women</MenuItem>
              <MenuItem>Another gender</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="__V"
            margin="normal"
            name="__v"
            onChange={handleOnChange}
            variant="outlined"
            type="number"
            value={state.__v}
          />

          {/*
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

          <Button color="success" variant="contained" sx={{mt: 2}}>
            Update User
          </Button>
        </Box>
      </form>
    </Container>
  );
}
