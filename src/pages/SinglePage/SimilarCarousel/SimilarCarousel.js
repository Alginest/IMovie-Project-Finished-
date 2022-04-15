import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SimilarSingle from "./SimilarSingle";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  popularSeries: {
    width: "100%",
    height: "600px",
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
  let { id, media_type } = useParams();

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
  const fetchSimilar = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&page=1`
      );
      setPopularSeries(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSimilar();
    // eslint-disable-next-line
  }, []);
  const items = popularSeries.map((c) => {
    return <SimilarSingle {...c} />;
  });
  return (
    <div className={classes.popularSeries}>
      <Typography
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Similar
      </Typography>
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
