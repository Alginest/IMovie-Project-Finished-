import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SeriesSm from "../SeriesSm/SeriesSm";
import useStyles from "./style";
import CustomePagination from "../../components/Pagination/CustomePagination";
import useGenres from "../../hooks/useGenre";
import axios from "axios";
import Genres from "../../components/Genres/Genres";
const SeriesMid = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenres(selectedGenres);
  const classes = useStyles();

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
    );
    setContent(data.results);

    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreForURL]);
  return (
    <section className={classes.movieMid}>
      <Container>
        <Typography
          variant="h2"
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "100px",
            marginBottom: "50px",
          }}
        >
          TV Series
        </Typography>
        <Genres
          type="tv"
          selectedGenres={selectedGenres}
          genres={genres}
          setGenres={setGenres}
          setSelectedGenres={setSelectedGenres}
          setPage={setPage}
        />
        <Grid container spacing={4} className={classes.bigCont}>
          {content.map((ser) => {
            return (
              <Grid item key={ser.id} lg={3}>
                <SeriesSm
                  id={ser.id}
                  poster={ser.poster_path}
                  name={ser.title || ser.name}
                  date={ser.first_air_date || ser.release_date}
                  media_type="tv"
                  vote_average={ser.vote_average}
                />
              </Grid>
            );
          })}
        </Grid>
        {numOfPages > 1 && (
          <Box className={classes.pagBox}>
            <CustomePagination setPage={setPage} numOfPages={500} />
          </Box>
        )}
      </Container>
    </section>
  );
};

export default SeriesMid;
