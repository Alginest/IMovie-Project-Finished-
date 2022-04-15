import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import TopRatedTvSingle from "./TopRatedTvSingle";
const useStyles = makeStyles((theme) => ({
  topRatedCarousel: {
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
  const [popularSeries, setPopularSeries] = useState([]);
  // eslint-disable-next-line
  const [page, setPage] = useState(1);

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
  const fetchPopularSeries = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=${page}`
      );

      setPopularSeries(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPopularSeries();
    // eslint-disable-next-line
  }, []);
  const items = popularSeries.map((c) => {
    return <TopRatedTvSingle {...c} />;
  });
  return (
    <div className={classes.topRatedCarousel}>
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
