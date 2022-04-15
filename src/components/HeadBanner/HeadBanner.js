import React from "react";
import { useGlobalContext } from "../../context";
import { makeStyles } from "@material-ui/core";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";
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

const HeadBanner = () => {
  const { loading } = useGlobalContext();

  const classes = useStyles();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classes.topBox}>
      <Header />
      <Carousel />
    </div>
  );
};

export default HeadBanner;
