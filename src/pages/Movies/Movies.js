import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieBanner from "../../MovieItems/MovieBanner/MovieBanner";
import Footer from "../../components/Footer/Footer";
import MoviesMid from "../../MovieItems/MovieMid/MoviesMid";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [page, setPage] = useState(2);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <MovieBanner movies={movies} loading={loading} />
      <MoviesMid movies={movies} />
      <Footer />
    </div>
  );
};

export default Movies;
