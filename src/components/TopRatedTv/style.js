import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  topRatedTv: {
    width: "100%",
    marginTop: "150px",
    height: "600px",
  },
  wide: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },
  moreBtn: {
    width: "150px",
    height: "35px",
    borderRadius: "30px",
    fontSize: 16,
    fontWeight: 700,
    textDecoration: "none",
    borderColor: "white",
    color: "white",
    marginLeft: "30px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "red",
    },
  },
}));
