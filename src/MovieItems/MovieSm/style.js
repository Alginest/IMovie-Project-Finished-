import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  movie: {
    borderRadius: 15,
    width: "100%",
    paddingBottom: "15px",
    position: "relative",
    backgroundColor: "#333",
    transition: "all 0.3s ease-in-out ",
    "&:hover": {
      boxShadow: "1px -208px 156px -16px rgba(100,100,100,1) inset",
    },
    cursor: "pointer",
  },
  poster: {
    borderRadius: 10,
    width: "90%",
    height: "383px",
    margin: "3% 5%",
  },
  badge: {
    position: "absolute",
    right: 5,
  },
}));
