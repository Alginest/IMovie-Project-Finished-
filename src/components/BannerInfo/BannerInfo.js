import { Badge, Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { img_500, unavailable } from "../../config/config";
import TransitionsModal from "../Modal/Modal";
import useStyles from "./style";
const BannerInfo = ({
  id,
  poster,
  title,
  media_type,
  date,
  vote_average,
  overview,
}) => {
  const classes = useStyles();
  return (
    <section className={classes.bannerInfo}>
      <Box className={classes.aboutShow}>
        <Typography variant="h2" className={classes.mainTitle}>
          {title.substring(0, 30)}
        </Typography>
        <Typography variant="body1" className={classes.overview}>
          {overview}
        </Typography>
        <Box className={classes.movDate}>
          <Typography variant="h5" className={classes.mediaType}>
            Type: {media_type === "movie" ? "Movie" : "TV Series"}
          </Typography>
          <Typography variant="h5" className={classes.date}>
            Released: {date.substring(0, 4)}
          </Typography>
        </Box>
        <Box className={classes.btnBox}>
          <Link to={`/${media_type}/${id}`} className={classes.specPage}>
            <Button variant="contained" className={classes.redBtn}>
              Watch Now
            </Button>
          </Link>
          <TransitionsModal id={id} media_type={media_type} />
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
