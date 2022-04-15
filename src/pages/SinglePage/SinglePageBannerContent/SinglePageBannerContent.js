import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  img_1920,
  img_300,
  img_500,
  unavailable,
} from "../../../config/config";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    height: "1000px",
    backgroundImage: (props) =>
      props.backdrop_path
        ? `url(${img_1920}/${props.backdrop_path})`
        : unavailable,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: "1px -408px 156px -16px rgba(60,60,60,1) inset",
    [theme.breakpoints.down("md")]: {
      height: "1200px",
    },
  },
  overlay: {
    width: "100%",
    height: "1000px",
    zIndex: -1,
    boxShadow: "rgba(0, 0, 0, .7) 0 0 0 100000px inset",
    [theme.breakpoints.down("md")]: {
      height: "1200px",
    },
  },
  bigCont: {
    width: "100%",
    height: "1000px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
    },
  },
  boxLeft: {
    width: "36%",
    height: "650px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  boxRight: {
    width: "58%",
    height: "650px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  poster: {
    height: "600px",
    borderRadius: "30px",
  },
  genres: {
    width: "60%",
    display: "flex",
    marginTop: "20px",
  },
  genresBoxes: {
    padding: "10px 20px",
    border: "2px solid white",
    margin: "5px 5px",
    borderRadius: "20px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smBox: {
    margin: "0 5px",
  },
  castMemberBox: {
    display: "flex",
    width: "100%",
    height: "220px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  castProfile: {
    width: "100%",
    height: "auto",
  },
  castsTitle: {
    color: "white",
    marginTop: "10px",
    fontWeight: 500,
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  castCarousel: {
    width: "100%",
    height: "auto",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  actor: {
    width: "100%",
    height: "420px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    objectFit: "contain",
  },
  actorPic: {
    width: "250px",
    height: "inherit",
  },
  actorName: {
    color: "white",
    marginTop: "10px",
    fontWeight: "bold",
  },
}));

const SinglePageBannerContent = (props) => {
  const { title, name, genres, overview } = props;
  const classes = useStyles(props);
  let newGenres = genres.slice(0, 3);
  const [cast, setCast] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  let { id, media_type } = useParams();
  const items = cast.map((c) => {
    return (
      <div className={classes.actor} key={c.id}>
        <img
          src={c.profile_path ? `${img_300}${c.profile_path}` : unavailable}
          alt={title}
          className={classes.actorPic}
        />
        <Typography className={classes.actorName}>{c.name}</Typography>
      </div>
    );
  });
  const responsive = {
    600: {
      items: 1,
    },
    900: {
      items: 2,
    },
  };
  // eslint-disable-next-line

  const fetchCast = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
      );
      setCast(data.cast);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  let castMembers = cast.slice(0, 5);
  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line
  }, [id, media_type]);
  return (
    <section className={classes.item}>
      <div className={classes.overlay}>
        <Container className={classes.bigCont}>
          <Box className={classes.boxLeft}>
            <img
              src={
                props.poster_path
                  ? `${img_500}${props.poster_path}`
                  : unavailable
              }
              alt={title}
              className={classes.poster}
            />
          </Box>
          <Box className={classes.boxRight}>
            <Typography variant="h4" className={classes.title}>
              {title || name}
            </Typography>
            <Box className={classes.genres}>
              {newGenres.map((gen) => {
                return (
                  <Typography key={gen.id} className={classes.genresBoxes}>
                    {gen.name}
                  </Typography>
                );
              })}
            </Box>
            <Typography
              variant="body1"
              style={{
                color: "white",
                marginTop: "25px",
                fontWeight: "500",
                letterSpacing: 0.5,
              }}
            >
              {overview}
            </Typography>
            <Typography variant="h4" className={classes.castsTitle}>
              Casts
            </Typography>
            <Box className={classes.castMemberBox}>
              {castMembers.map((actor) => {
                return (
                  <Box key={actor.id} className={classes.smBox}>
                    <img
                      src={
                        actor.profile_path
                          ? `${img_300}${actor.profile_path}`
                          : unavailable
                      }
                      alt={title}
                      className={classes.castProfile}
                    />
                    <Typography variant="body2" style={{ color: "white" }}>
                      {actor.name}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box className={classes.castCarousel}>
              <AliceCarousel
                infinite
                mouseTracking
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
              />
            </Box>
          </Box>
        </Container>
      </div>
    </section>
  );
};

export default SinglePageBannerContent;
