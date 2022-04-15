import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SeriesSingleCont from "../SeriesSingleCont/SeriesSingleCont";

const Carousel = ({ series }) => {
  const items = series.map((c) => {
    const { id, backdrop_path } = c;
    return <SeriesSingleCont id={id} backdrop_path={backdrop_path} {...c} />;
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
