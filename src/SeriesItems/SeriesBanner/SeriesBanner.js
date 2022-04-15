import React from "react";
import { makeStyles } from "@material-ui/core";
import SeriesCarousel from "../SeriesCarousel/SeriesCarousel";
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

const HeadBanner = ({ series, loading }) => {
  const classes = useStyles();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classes.topBox}>
      <Header />
      <SeriesCarousel series={series} />
    </div>
  );
};

export default HeadBanner;
