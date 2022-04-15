import { List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <section className={classes.header}>
      <Typography variant="h3" className={classes.title}>
        <div className={classes.logo}>
          <PlayCircleFilledOutlinedIcon className={classes.icon} />
        </div>
        iMovies
      </Typography>
      <List className={classes.list}>
        <ListItem className={classes.ul}>
          <Link
            to="/"
            className={
              pathName === "/"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            Home
          </Link>
        </ListItem>
        <ListItem className={classes.ul}>
          <Link
            to="/movies"
            className={
              pathName === "/movies"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            Movies
          </Link>
        </ListItem>
        <ListItem className={classes.ul}>
          <Link
            to="/series"
            className={
              pathName === "/series"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            Series
          </Link>
        </ListItem>
        <ListItem className={classes.ul}>
          <Link
            to="/search"
            className={
              pathName === "/search"
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
          >
            Search
          </Link>
        </ListItem>
      </List>
    </section>
  );
};

export default Header;
