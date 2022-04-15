import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  movieMid: {
    width: "100%",
    height: "auto",
    paddingBottom: "80px",
    backgroundColor: "rgb(20,20,20);",
  },
  pagBox: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pagi: {
    color: "white",
  },
  bigCont: {
    width: "100%",
    height: "inherit",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
}));
