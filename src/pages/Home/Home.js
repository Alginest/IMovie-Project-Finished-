import React from "react";
import useStyles from "./styles";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import AllHome from "../../components/AllHome/AllHome";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../../components/Footer/Footer";

const theme = createTheme({});
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <ThemeProvider theme={theme}>
        <HeadBanner />
        <AllHome />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Home;
