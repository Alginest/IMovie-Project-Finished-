import { Container } from "@material-ui/core";
import React from "react";
import TopRatedMovies from "../TopRated/TopRatedMovies.js";
import UpcomingMovies from "../UpcomingMovie/UpcomingMovies.js";
import PopularSeries from "../PopularSeries/PopularSeries";
import TopRatedTv from "../TopRatedTv/TopRatedTv";
import useStyles from "./styles.js";
const AllHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.allHome}>
      <Container maxWidth="xl">
        <UpcomingMovies />
        <TopRatedMovies />
        <PopularSeries />
        <TopRatedTv />
      </Container>
    </div>
  );
};

export default AllHome;
