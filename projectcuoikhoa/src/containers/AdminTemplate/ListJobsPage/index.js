import { Box, Button, Container, ListItem } from "@material-ui/core";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import SearchJobsPage from "../SearchJobsPage";
import NavbarJobs from "../_components/NavbarJobs";
import {
  actDeleteJobsApi,
  actFetchListJobsApi,
  actBookingJobsApi,
} from "./modules/actions";
import Video from "../_video";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListJobsPage(path) {
  const listJobs = useSelector((state) => {
    return state.fetchListJobsReducer.listJobs;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  // state: soCardRender
  const [soCardRender, setSoCardRender] = useState(
    //gtri ban đầu: 5
    5
  );

  //!scroll: ban đầu render ra 5items => scroll tiếp xuống render thêm tiếp
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setSoCardRender((soCardRender) => soCardRender + 5);
      }
    });
    dispatch(actFetchListJobsApi());
  }, []);

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderListJobs = () => {
    //array.slice(start, end)
    return listJobs?.slice(0, soCardRender).map((jobs) => {
      return (
        <Grid item xs={12} sm={6} key={jobs._id}>
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
              image={jobs.image}
              alt={jobs.name}
            />
            <CardContent>
              <Link to={`/detail-job/${jobs._id}`}>{jobs.name}</Link>
              <Typography variant="body2">Rating: {jobs.rating}</Typography>
              <Typography variant="body2">Price: {jobs.price}</Typography>
            </CardContent>

            <Box sx={{textAlign: "center"}}>
              <Button
                onClick={() => history.push(`/edit-jobs/${jobs._id}`)}
                color="success"
                variant="contained"
              >
                Edit
              </Button>
              <Button
                onClick={() => dispatch(actDeleteJobsApi(jobs._id))}
                color="error"
                variant="contained"
              >
                Delete
              </Button>
              <Button
                onClick={() => dispatch(actBookingJobsApi(jobs._id))}
                color="warning"
                variant="contained"
              >
                Booking
              </Button>
            </Box>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      );
    });
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="md">
        {/* cả subType và type đều có NavbarJobs -> render chung vị trí đc ko và ở đâu? */}
        {/* {path == "/list-subType-jobs" && path == "/list-type-jobs" && path == "/list-jobs" && <NavbarJobs/>} */}
        <NavbarJobs />
        <Box>
          <Typography color="textPrimary" variant="h3">
            Lists Jobs Page
          </Typography>
        </Box>
        <Link to="/add-jobs" className="btn btn-info">
          AddJobs
        </Link>

        <Video />

        <SearchJobsPage />
        <Box>
          {/* ko chia cột đc?? */}
          <Grid container>{renderListJobs()}</Grid>
        </Box>
      </Container>
    </Box>
  );
}
