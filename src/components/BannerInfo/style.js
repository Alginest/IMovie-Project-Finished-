import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  bannerInfo: {
    display: "flex",
    width: "100%",
    height: "700px",
    justifyContent: "space-between",
    paddingTop: "100px",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      height: "auto",
    },
  },
  aboutShow: {
    width: "60%",
    height: "auto",
    marginTop: "100px",
    marginRight: "50px",
    animation: `$myEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: "0",
    },
  },
  aboutPoster: {
    position: "relative",
    width: "40%",
    height: "auto",
    marginTop: "80px",
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  badge: {
    position: "absolute",
    right: 90,
    top: 30,
    [theme.breakpoints.down("md")]: {},
  },
  poster: {
    borderRadius: 50,
    width: "400px",
  },
  mainTitle: {
    fontWeight: "bold",
    color: "white",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "50px",
    },
  },
  overview: {
    color: "white",
    letterSpacing: 0.5,
    fontWeight: "bold",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "100px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  redBtn: {
    width: "220px",
    height: "50px",
    borderRadius: "30px",
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: "red",
    color: "white",
    marginRight: "30px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "red",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0",
    },
  },
  specPage: {
    textDecoration: "none",
    color: "white",
  },
  movDate: {
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  mediaType: {
    color: "white",
  },
  date: {
    color: "white",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
