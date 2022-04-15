import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import UpcomingSingle from "./UpcomingSingle";
const useStyles = makeStyles((theme) => ({
  upcomingCarousel: {
    width: "100%",
    height: "500px",
    marginTop: "30px",

    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
      marginBottom: "10px",
    },
  },
}));
const Carousel = () => {
  const classes = useStyles();
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  // eslint-disable-next-line
  const [page, setPage] = useState(2);

  const responsive = {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    612: {
      items: 3,
    },
    900: {
      items: 4,
    },
    1204: {
      items: 5,
    },
    1506: {
      items: 6,
    },
    1806: {
      items: 7,
    },
  };
  //fetch upcoming
  const fetchUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`
      );
      setUpcomingMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies();
    // eslint-disable-next-line
  }, []);
  const items = upcomingMovies.map((c) => {
    return <UpcomingSingle {...c} />;
  });
  return (
    <div className={classes.upcomingCarousel}>
      <AliceCarousel
        infinite
        mouseTracking
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
