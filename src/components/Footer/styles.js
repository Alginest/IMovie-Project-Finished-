import { makeStyles } from "@material-ui/core";
import footer_bg from "../../images/footer-bg.jpg";
export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "auto",
    paddingBottom: "200px",
    backgroundImage: `url(${footer_bg})`,
    backgroundSize: "cover",
  },
  titleBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "100px",
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
  title: {
    color: "white",
    display: "flex",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginRight: "10px",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  gridCont: {
    width: "100%",
    height: "auto",
    paddingBottom: 50,
    marginTop: 100,
  },
  gridItem: {
    display: "flex",
    height: "200px",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  li: {
    listStyle: "none",
    textDecoration: "none",
  },

  link: {
    fontSize: 30,
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease-in",
    "&:hover": {
      textDecoration: "none",
      color: "red",
    },
  },
}));
