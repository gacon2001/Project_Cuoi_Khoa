import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actAddJobsApi , actFetchListTypeJobsApi, actFetchListSubTypeJobsApi} from "./modules/actions";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl
} from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";

export default function AddJobsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
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
    dispatch(actAddJobsApi(state));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleCheckBox = (event) => {
    const { name, checked } = event.target;
    setState({
      ...state,
      [name]: checked,
    });
  };

  useEffect(()=>{
    dispatch(actFetchListTypeJobsApi());
    dispatch(actFetchListSubTypeJobsApi());
  }, [])

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
          onChange={handleOnChange}
          variant="outlined"
          type="number"
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
            control={<Checkbox />}
            label="Pro Services"
            onChange={handleCheckBox}
            checked={state.proServices}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Local Sellers"
            onChange={handleCheckBox}
            checked={state.localSellers}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Online Sellers"
            onChange={handleCheckBox}
            checked={state.onlineSellers}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Delivery Time"
            onChange={handleCheckBox}
            checked={state.deliveryTime}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Type</InputLabel>
            <Select
              fullWidth
              onChange={handleOnChange}
              variant="outlined"
            >
              {/* render list cv chính */}
              {/* <MenuItem value={true}>Men</MenuItem> */}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>SubType</InputLabel>
            <Select
              fullWidth
              onChange={handleOnChange}
              variant="outlined"
            >
              {/* render list cv phụ */}
              {/* <MenuItem value={true}>Men</MenuItem> */}
            </Select>
          </FormControl>
        </FormGroup>
        <Button color="success" variant="contained">
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
