import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import useStyles from "./style";

import { useParams } from "react-router-dom";
const SinglePageVid = () => {
  const classes = useStyles();
  const [video, setVideo] = React.useState("");
  let { id, media_type } = useParams();

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
    // eslint-disable-next-line
  }, [media_type, id]);
  return (
    <section className={classes.vidSection}>
      <Container className={classes.bigCont}>
        <Typography variant="h4" className={classes.title}>
          International Trailer
        </Typography>
        <iframe
          width="100%"
          height="900px"
          src={`https://www.youtube-nocookie.com/embed/${video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className={classes.frame}
        />
      </Container>
    </section>
  );
};

export default SinglePageVid;
