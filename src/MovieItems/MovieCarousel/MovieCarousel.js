import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MovieSingleCont from "../MovieSingleCont/MovieSingleCont";

const Carousel = ({ movies }) => {
  const items = movies.map((c) => {
    const { id, backdrop_path } = c;
    return <MovieSingleCont id={id} backdrop_path={backdrop_path} {...c} />;
  });
  const responsive = {
    1920: {
      items: 1,
    },
  };
  return (
    <AliceCarousel
      infinite
      mouseTracking
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
    />
  );
};

export default Carousel;
