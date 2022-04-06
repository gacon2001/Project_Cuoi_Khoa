import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { actEditJobsApi, actFetchDetailJobsApi } from "./modules/actions";

import { Box, Typography, Container, TextField, Button } from "@material-ui/core";

export default function EditJobsPage() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailJobs = useSelector((state) => state.editJobsReducer.detailJobs);
  const history = useHistory();

  const [state, setState] = useState({
    image: "",
    name: "",
    rating: "",
    price: "",
  });

  useEffect(() => {
    if (detailJobs !== null) setState(detailJobs);
  }, [detailJobs]);

  useEffect(() => {
    dispatch(actFetchDetailJobsApi(_id));
  }, []);

  const updateJobs = (event) => {
    event.preventDefault();
    dispatch(actEditJobsApi(_id, state));
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
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
        <Typography variant="h4">EditJobsPage</Typography>
        <form onSubmit={updateJobs}>
          <TextField
            fullWidth
            // label="Image"
            margin="normal"
            name="image"
            onChange={handleOnChange}
            variant="outlined"
            type="filename"
            value={state.image}
          />
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
              label="Rating"
              margin="normal"
              name="rating"
              onChange={handleOnChange}
              variant="outlined"
              type="number"
              value={state.rating}
            />
            <TextField
              fullWidth
              label="Price"
              margin="normal"
              name="price"
              onChange={handleOnChange}
              variant="outlined"
              type="number"
              value={state.price}
            />
            <Button color="success" variant="contained" type="submit">Update </Button>
            <Button color="inherit" variant="contained" onClick={()=> history.push("/list-jobs")}>Cancel</Button>
        </form>
      </Container>
    </Box>
  );
}
