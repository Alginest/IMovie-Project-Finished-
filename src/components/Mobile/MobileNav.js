import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  mobileNav: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "sticky",
    bottom: 0,
    zIndex: 100,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  root: {
    width: "100%",
    backgroundColor: "#222",
  },
  icon: {
    color: "white",
    width: "100%",
  },
}));

const MobileNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section className={classes.mobileNav}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={
            <Link to="/" onClick={handleClick}>
              <HomeIcon className={classes.icon} />
            </Link>
          }
          style={{ color: "white" }}
        />

        <BottomNavigationAction
          label="Movies"
          value="Movies"
          icon={
            <Link to="/movies" onClick={handleClick}>
              <MovieIcon className={classes.icon} />
            </Link>
          }
          style={{ color: "white" }}
        />

        <BottomNavigationAction
          label="TV Series"
          value="Series"
          icon={
            <Link to="/series" onClick={handleClick}>
              <TvIcon className={classes.icon} />
            </Link>
          }
          style={{ color: "white" }}
        />

        <BottomNavigationAction
          label="Search"
          value="Search"
          icon={
            <Link to="/search" onClick={handleClick}>
              <SearchIcon className={classes.icon} />
            </Link>
          }
          style={{ color: "white" }}
        />
      </BottomNavigation>
    </section>
  );
};
export default MobileNav;
