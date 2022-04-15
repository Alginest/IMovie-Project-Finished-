import { Badge, Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { img_500, unavailable } from "../../config/config";
import MovieModal from "../MovieModal/MovieModal";
import useStyles from "./style";
const BannerInfo = ({ id, poster, title, date, vote_average, overview }) => {
  const classes = useStyles();
  return (
    <section className={classes.bannerInfo}>
      <Box className={classes.aboutShow}>
        <Typography variant="h1" className={classes.mainTitle}>
          {title.substring(0, 30)}
        </Typography>
        <Typography variant="body1" className={classes.overview}>
          {overview}
        </Typography>
        <Box className={classes.movDate}>
          <Typography variant="h5" className={classes.mediaType}>
            Type: Movie
          </Typography>
          <Typography variant="h5" className={classes.date}>
            Released: {date.substring(0, 4)}
          </Typography>
        </Box>
        <Box className={classes.btnBox}>
          <Link to={`/movie/${id}`} className={classes.specPage}>
            <Button variant="contained" className={classes.redBtn}>
              Watch Now
            </Button>
          </Link>
          <MovieModal id={id} media_type={"movie"} />
        </Box>
      </Box>
      <Box className={classes.aboutPoster}>
        <Badge
          badgeContent={vote_average}
          className={classes.badge}
          color={vote_average < 6 ? "secondary" : "primary"}
        />
        <img
          src={poster ? `${img_500}${poster}` : unavailable}
          alt={title}
          className={classes.poster}
        />
      </Box>
    </section>
  );
};

export default BannerInfo;
