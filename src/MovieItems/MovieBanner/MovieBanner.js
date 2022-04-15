import React from "react";
import { makeStyles } from "@material-ui/core";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import Header from "../../components/Header/Header";
import Loading from "../../pages/Loading/Loading";

const useStyles = makeStyles((theme) => ({
  topBox: {
    height: 1000,
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
}));

const HeadBanner = ({ movies, loading }) => {
  const classes = useStyles();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classes.topBox}>
      <Header />
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default HeadBanner;
