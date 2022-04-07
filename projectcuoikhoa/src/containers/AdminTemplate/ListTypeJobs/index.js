import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import NavbarJobs from "../_components/NavbarJobs";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { actDeleteJobsApi } from "../ListJobsPage/modules/actions";
import { actBookingJobsApi } from "../ListJobsPage/modules/actions";
import SearchJobsPage from "../SearchJobsPage";
import { actFetchListTypeJobsApi } from "./modules/actions";

import Video from "../_video";

import Switch from "../_switch/index";
import IOSSwitch from "../_switch/IOSSwitch";

export default function ListTypeJobs() {
  const dispatch = useDispatch();
  const listTypeJobs = useSelector(
    (state) => state.fetchListTypeJobsReducer.listTypeJobs
  );
  const { IDType } = useParams();
  const history = useHistory();

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
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  <IOSSwitch />;

  const renderListTypeJobs = () => {
    return listTypeJobs?.map((type) => {
      return (
        <>
          <Grid xs={12} sm={6} md={4} item key={type._id}>
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
                image={type.image}
                alt={type.name}
              />
              <CardContent>
                <Link to={`/detail-job/${type._id}`}>{type.name}</Link>
                <Grid>Rating: {type.rating}</Grid>
                <Grid>Price: {type.price}</Grid>
              </CardContent>

              <Button
                onClick={() => history.push(`/edit-jobs/${type._id}`)}
                color="success"
                variant="contained"
              >
                Edit
              </Button>
              <Button
                onClick={() => dispatch(actDeleteJobsApi(type._id))}
                color="error"
                variant="contained"
              >
                Delete
              </Button>
              <Button
                onClick={() => dispatch(actBookingJobsApi(type._id))}
                color="warning"
                variant="contained"
              >
                Booking
              </Button>

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
        </>
      );
    });
  };

  useEffect(() => {
    dispatch(actFetchListTypeJobsApi(IDType));
  }, []);

  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="md">
       <NavbarJobs /> 
        <Box>
          <Typography color="textPrimary" variant="h3">
            List TypeJobs Page
          </Typography>
        </Box>
        <Link to="/add-jobs" className="btn btn-info">
          AddJobs
        </Link>

        <Video />

        <SearchJobsPage />
        <Box>
          <Switch />
          <Grid container spacing={2}>{renderListTypeJobs()}</Grid>
        </Box>
      </Container>
    </Box>
  );
}
