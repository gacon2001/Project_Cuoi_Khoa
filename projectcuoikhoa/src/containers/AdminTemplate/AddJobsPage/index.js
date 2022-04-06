import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actAddJobsApi,
  actFetchListTypeJobsApi,
  actFetchListSubTypeJobsApi,
} from "./modules/actions";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";

export default function AddJobsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listTypeJobs = useSelector(
    (state) => state.addJobsReducer.listTypeJobs
  );
  const listSubTypeJobs = useSelector(
    (state) => state.addJobsReducer.listSubTypeJobs
  );
  const [state, setState] = useState({
    name: "",
    rating: "",
    price: "",
    proServices: true,
    localSellers: true,
    onlineSellers: true,
    deliveryTime: true,
    type: "",
    subType: "",
  });

  const addJobs = (event) => {
    event.preventDefault();
    const data = { ...state };
    // === 0 : nếu chưa chọn
    if (data.type.length === 0) {
      delete data.type; //nếu chưa đc chọn thì phải xoá luôn object chuỗi rỗng
    }
    if (data.subType.length === 0) {
      delete data.subType;
    }
    dispatch(actAddJobsApi(data));
  };

  //khi 1 hđ làm ảnh hưởng tới UI -> useState
  const [type, setType] = useState("");//"": cả 2 đều active

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  //!chỉ đc nhập số
  const handleOnChangeRating = (event) => {
    const { name, value } = event.target;
    if (isNaN(value)) {
      alert("this input must be a number.");
      return;
    }
    setState({ ...state, [name]: value });
  };

  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked,
    });
  };

  const renderListTypeJobs = () => {
    console.log(listTypeJobs);
    return listTypeJobs?.map((idTypeJobs) => {
      return (
        <MenuItem key={idTypeJobs._id} value={idTypeJobs._id}>
          {idTypeJobs.name}
        </MenuItem>
      );
    });
  };
  const renderListSubTypeJobs = () => {
    return listSubTypeJobs?.map((idSubTypeJobs) => {
      return (
        <MenuItem key={idSubTypeJobs._id} value={idSubTypeJobs._id}>
          {idSubTypeJobs.name}
        </MenuItem>
      );
    });
  };

  useEffect(() => {
    dispatch(actFetchListTypeJobsApi());
    dispatch(actFetchListSubTypeJobsApi());
  }, []);
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={addJobs}>
        <Box>
          <Typography color="textPrimary" variant="h4">
            Add New Job Page
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
          label="Rating"
          margin="normal"
          name="rating"
          value={state.rating}
          onChange={handleOnChangeRating}
          variant="outlined"
          type="text"
        />
        <TextField
          fullWidth
          label="Price"
          margin="normal"
          name="price"
          onChange={handleOnChange}
          variant="outlined"
          type="number"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="proServices"
                checked={state.proServices}
              />
            }
            label="Pro Services"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="localSellers"
                checked={state.localSellers}
              />
            }
            label="Local Sellers"
            value={state.localSellers}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="onlineSellers"
                checked={state.onlineSellers}
              />
            }
            label="Online Sellers"
            value={state.onlineSellers}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCheckBox}
                name="deliveryTime"
                checked={state.deliveryTime}
              />
            }
            label="Delivery Time"
            value={state.deliveryTime}
          />
          {/* làm disabled */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Type</InputLabel>
            <Select
              disabled={type === "subtype"}//chọn subtype(tự qui định) -> type : disabled
              fullWidth
              name="type"
              onChange={(e) => {
                if (e.target.value === "reset") {
                  setType("");
                  handleOnChange({name: e.target.name, value: ""});//reset lại thì phải đặt lại value là ""
                } else {
                  setType("type"); // type = "type"
                  handleOnChange(e);
                }
              }}
              variant="outlined"
            >
              <MenuItem value="reset">Default</MenuItem>
              {renderListTypeJobs()}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>SubType</InputLabel>
            <Select
              disabled={type === "type"}
              fullWidth
              name="subType"
              onChange={(e) => {
                if (e.target.value === "reset") {
                  setType("");
                  handleOnChange({...e, value: ""});//...e: copy nguyên object e của handleOnChange
                } else {
                  setType("subtype");
                  handleOnChange(e);
                }
              }}
              variant="outlined"
            >
              <MenuItem value="reset">Default</MenuItem>
              {renderListSubTypeJobs()}
            </Select>
          </FormControl>
        </FormGroup>
        <Button color="success" variant="contained" type="submit">
          Add Job
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => history.push("/list-jobs")}
        >
          Cancel
        </Button>
      </form>
    </Container>
  );
}
