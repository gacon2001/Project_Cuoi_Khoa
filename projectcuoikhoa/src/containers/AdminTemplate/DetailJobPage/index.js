import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { actDetailJobsApi } from "./modules/actions";
import { actBookingJobsApi } from "../ListJobsPage/modules/actions";
import { actFetchDetailUserApi } from "../EditUserAdmin/modules/actions";
import { Box, Container, Typography, Button } from "@material-ui/core";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import Grid from "@mui/material/Grid";
import { AccessTime } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function DetailJobPage() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const detailJobs = useSelector((state) => state.detailJobsReducer.detailJobs);
  const detailUser = useSelector((state) => state.editUserReducer.detailUser);

  const [state, setState] = useState({
    image: "",
    name: "",
    rating: "",
    price: "",
    type: {
      name: "",
    },
    subType: { name: "" },
  });

  const [userCreated, setUserCreated] = useState({
    skill: ["HTML", "PHP"],
    certification: ["Cousera"],
    email: "example@gmail.com",
    phone: "123456789",
    birthday: "",
    gender: true,
    name: "",
  });

  useEffect(() => {
    console.log(detailJobs);
    if (detailJobs) {
      setState(detailJobs);
      dispatch(actFetchDetailUserApi(detailJobs.userCreated));
    }
  }, [detailJobs]);
  useEffect(() => {
    if (detailUser !== null) setUserCreated(detailUser);
  }, [detailUser]);

  useEffect(() => {
    dispatch(actDetailJobsApi(_id));
    
  }, []);

  // const handleOnChange = (event) => {
  //   const { name, value } = event.target;
  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };

  return (
    <Box
      sx={{
        mt: 10,
      }}
    >
      <Container maxWidth="md">
        <div>
          {/* <Link to="/">{state.type.name}</Link> */}
          {/* <Link to="/">{state.subType.name}</Link> */}
        </div>
        <Typography variant="h3">{state.name}</Typography>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            {/* Tên của seller = userCreated: có id => mình phải fetchDetailUser? */}
            {userCreated.name}
          </Box>
          <Rating
            name="text-feedback"
            value={state.rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{[state.rating]}</Box>
        </Box>
        <hr />
        <img src={state.image} style={{width: "100%"}} />

        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <p>
                  Full service with high details graphic and unlimited
                  revisions.
                </p>
                {/* ko cùng hàng??? */}
                <Grid container direction="row">
                  <Grid item xs={6}>
                    <AccessTime />
                    <Typography component="span" variant="body2">5 Days Delivery</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <HighlightOffIcon />
                    <Typography variant="body2">Unlimited Revisions</Typography>
                  </Grid>
                </Grid>
                <Box>
                  <CheckIcon />1 concept included
                </Box>
                <Box>
                  <CheckIcon />
                  Source file
                </Box>
                <Box>
                  <CheckIcon />
                  Logo transparency
                </Box>
                <Box>
                  <CheckIcon />
                  Printable file
                </Box>
                <Box>
                  <CheckIcon />
                  Vector file
                </Box>
              </Grid>
              <Grid item xs>
                <Button
                  fullWidth
                  color="warning"
                  variant="contained"
                  onClick={() => dispatch(actBookingJobsApi(state._id))}
                >
                  Booking
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                ${state.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* vào giữa? */}
        <Button color="success" variant="outlined" size="large">
          Contact Seller
        </Button>

        <Box>
          <Typography variant="subtitle1">About This Gig</Typography>
          <p>
            This is my special gig for Army - Military - Tactical design. If you
            are in need of a design for anything related to this theme,
            especially the logo / patch / badge, I am the right choice for you !
          </p>
        </Box>
        <Box>
          <Typography variant="subtitle1">PACKAGE INCLUDES:</Typography>
          <ul>
            <li>
              Design with high level of details, all redrawn by hand, without
              using existing cheap clipart, without trace by soft.
            </li>
            <li>
              All source files with these format: AI EPS PSD SVG PDF - editable
              and printable.
            </li>
            <li>High Resolution image file: JPG JPEG.</li>
            <li>High Resolution transparent background file: PNG.</li>
            <li>Fonts used if you need.</li>
            <li>UNLIMITED REVISIONS UNTIL YOU'RE SATISFIED.</li>
            <li>100% REFUND IF YOU'RE NOT HAPPY WITH THE RESULT.</li>
          </ul>
        </Box>
        <Box>
          <Typography variant="subtitle1">REQUIREMENTS:</Typography>
          <ul>
            <li>
              Informations: Theme, graphic element, text, style... anything you
              want to put into the design.
            </li>
            <li>If you already have a sketch, that's great !</li>
          </ul>
        </Box>
        <Typography variant="subtitle1">
          Please take a look at the examples I provide and if you have anything
          unclear, please don't hesitate to contact me and ask questions, I will
          try my best !
        </Typography>
        <p>Looking forward to working with you !</p>
        <p>Best regards,</p>
        <p>{userCreated.name}</p>

        <Box>
          <Typography variant="subtitle1">About The Seller</Typography>
          <Grid item xs={6}>
            <Grid item direction="column">
              {/* img */}
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{userCreated.name}</Typography>
              <p>{userCreated.skill}</p>
              <p>{userCreated.certification}</p>
              <p>{userCreated.birthday}</p>
              <p>{userCreated.email}</p>
              <p>{userCreated.phone}</p>
              <p>{userCreated.gender ? "Men" : "Women"}</p>
              <Button variant="outlined" color="primary">
                Contact
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box>{/* COMMENT */}</Box>

        <hr />
        <footer>
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <PinterestIcon />
        </footer>
      </Container>
    </Box>
  );
}
