import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListBookingJobsApi } from "./modules/actions";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { Box, Container } from "@material-ui/core";

export default function ListBookingJobs() {
  const dispatch = useDispatch();
  const listBookingJobs = useSelector(
    (state) => state.fetchlistBookingJobsReducer.listBookingJobs
  );

  useEffect(() => {
    dispatch(actFetchListBookingJobsApi());
  }, []);

  const renderListBookingJobs = () => {
    // console.log(listBookingJobs);
    return listBookingJobs?.bookingJob?.map((book, index) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={book.image}
              alt={book.name}
            />
            <CardContent>
              <Link to={`/detail-job/${book._id}`}>{book.name}</Link>
              <Typography variant="body2">Rating: {book.rating}</Typography>
              <Typography variant="body2">Price: {book.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="md">
        <Typography color="textPrimary" variant="h3">
        ListBookingJobs
      </Typography>
        <Grid container spacing={2} sx={{mt: 3}}>
          {renderListBookingJobs()}
        </Grid>
      </Container>
    </Box>
  );
}
