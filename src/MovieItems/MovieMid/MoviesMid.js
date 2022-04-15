import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MovieSm from "../MovieSm/MovieSm";
// import useGenres from "../../hooks/useGenre";
import useStyles from "./style";
import CustomePagination from "../../components/Pagination/CustomePagination";
import useGenres from "../../hooks/useGenre";
import axios from "axios";
import Genres from "../../components/Genres/Genres";
const MoviesMid = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenres(selectedGenres);
  const classes = useStyles();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
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
          Movies
        </Typography>
        <Genres
          type="movie"
          selectedGenres={selectedGenres}
          genres={genres}
          setGenres={setGenres}
          setSelectedGenres={setSelectedGenres}
          setPage={setPage}
        />
        <Grid container spacing={4} className={classes.bigCont}>
          {content.map((mov) => {
            return (
              <Grid item key={mov.id} lg={3}>
                <MovieSm
                  id={mov.id}
                  poster={mov.poster_path}
                  title={mov.title || mov.name}
                  date={mov.first_air_date || mov.release_date}
                  media_type="movie"
                  vote_average={mov.vote_average}
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

export default MoviesMid;
