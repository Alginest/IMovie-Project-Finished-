import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { img_1920, unavailable } from "../../config/config";
import BannerInfo from "../BannerInfo/BannerInfo";

const useStyles = makeStyles((theme) => ({
  topBox: {
    height: 1000,
    width: "100%",
  },
  item: {
    width: "100%",
    height: "1000px",
    position: "relative",
    backgroundImage: (props) =>
      props.backdrop_path
        ? `url(${img_1920}/${props.backdrop_path})`
        : unavailable,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: "1px -208px 156px -16px rgba(60,60,60,1) inset",
  },

  bigCont: {
    width: "100%",
    height: "1000px",
  },
  overlay: {
    width: "100%",
    height: "1000px",
    zIndex: -1,
    boxShadow: "rgba(0, 0, 0, .7) 0 0 0 100000px inset",
  },
}));
const handleDragStart = (e) => e.preventDefault();
const SingleCont = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <div
        className={classes.item}
        key={props.id}
        onDragStart={handleDragStart}
      >
        <div className={classes.overlay}>
          <Container className={classes.bigCont}>
            <BannerInfo
              id={props.id}
              poster={props.poster_path}
              title={props.title || props.name}
              date={props.first_air_date || props.release_date}
              media_type={props.media_type}
              vote_average={props.vote_average}
              overview={props.overview}
            />
          </Container>
        </div>
      </div>
    </>
  );
};

export default SingleCont;
