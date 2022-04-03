import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actFetchDetailUserBookingApi, actFetchListBookingJobsApi } from "./modules/actions";

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

export default function ListBookingJobs() {
  // const {_id} = useParams();
  const dispatch = useDispatch();
  const listBookingJobs = useSelector(
    (state) => state.fetchlistBookingJobsReducer.listBookingJobs
  );
  const detailUserBooking = useSelector((state)=> state.fetchlistBookingJobsReducer.detailUserBooking);

  useEffect(()=>{
    // lấy data từ trong localStorage (string)
    // JSON.parse(data) -> object data
    // data.user._id
    dispatch(actFetchListBookingJobsApi());
    // dispatch(actFetchDetailUserBookingApi(_id));
  }, [])

  const renderListBookingJobs = () => {
    return listBookingJobs?.map((book) => {
      return (
        <div>
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
              image={book.bookingJob.image}
              alt={book.bookingJob.name}
            />
            <CardContent>
              <Link to={`/detail-job/${book.bookingJob._id}`}>{book.bookingJob.name}</Link>
              <Typography variant="body2">Rating: {book.bookingJob.rating}</Typography>
              <Typography variant="body2">Price: {book.bookingJob.price}</Typography>
            </CardContent>
          </Card>
        </div> 
      );
    });
  };

  return (
    <div>
      <h3>ListBookingJobs</h3>

      <div className="container">
        <div className="row">{renderListBookingJobs()}</div>
      </div>
    </div>
  );
}
