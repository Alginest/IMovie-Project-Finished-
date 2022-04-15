import { Box, Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(`
            https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`);
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <Box style={{ padding: "6px 0", margin: "50px 0" }}>
      {selectedGenres &&
        selectedGenres.map((gen) => {
          return (
            <Chip
              key={gen.id}
              label={gen.name}
              style={{ margin: 2 }}
              size="small"
              color="primary"
              clickable
              onDelete={() => handleRemove(gen)}
            />
          );
        })}
      {genres &&
        genres.map((gen) => {
          return (
            <Chip
              key={gen.id}
              label={gen.name}
              style={{ margin: 2, color: "#22", fontWeight: "bold" }}
              size="small"
              clickable
              onClick={() => handleAdd(gen)}
            />
          );
        })}
    </Box>
  );
};

export default Genres;
