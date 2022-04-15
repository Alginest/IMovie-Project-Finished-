import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGlobalContext } from "../../context";
import SingleCont from "../SingleCont.js/SingleCont";

const Carousel = () => {
  const { content } = useGlobalContext();

  const items = content.map((c) => {
    const { id, backdrop_path, name } = c;
    return (
      <SingleCont id={id} backdrop_path={backdrop_path} name={name} {...c} />
    );
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
