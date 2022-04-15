import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import TopRatedTvCarousel from "../../Carousels/TopRatedTvCarousel/TopRatedTvCarousel";

const TopRatedMovies = () => {
  const classes = useStyles();
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <section className={classes.topRatedTv}>
      <Box className={classes.wide}>
        <Typography
          style={{ color: "white" }}
          variant="h5"
          className={classes.generalName}
        >
          Top Rated Tv
        </Typography>

        <Link to="/series" className={classes.link} onClick={handleClick}>
          <Button className={classes.moreBtn} variant="outlined" type="button">
            View More
          </Button>
        </Link>
      </Box>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <TopRatedTvCarousel />
      </div>
    </section>
  );
};

export default TopRatedMovies;
