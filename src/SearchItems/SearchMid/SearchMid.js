import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchSm from "../SearchSm/SearchSm";
import useStyles from "./style";
import CustomePagination from "../../components/Pagination/CustomePagination";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import Loading from "../../pages/Loading/Loading";
const MoviesMid = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("a");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_MOVIE_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scroll(0, 800);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <section className={classes.movieMid}>
      <Container>
        <ThemeProvider theme={darkTheme}>
          <div className={classes.search}>
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5, marginTop: 30 }}
            aria-label="disabled tabs example"
          >
            <Tab style={{ width: "50%" }} label="Search Movies" />
            <Tab style={{ width: "50%" }} label="Search TV Series" />
          </Tabs>
        </ThemeProvider>
        <Grid container spacing={4} className={classes.bigCont}>
          {content.map((c) => {
            return (
              <Grid item key={c.id} lg={3}>
                <SearchSm
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type={type ? "tv" : "movie"}
                  vote_average={c.vote_average}
                />
              </Grid>
            );
          })}
        </Grid>
        {loading && <Loading />}
        {searchText &&
          !content[0] &&
          (type ? (
            <Typography
              variant="h2"
              style={{ marginTop: "20px", color: "white", fontWeight: 500 }}
            >
              No Series Found
            </Typography>
          ) : (
            <Typography
              variant="h2"
              style={{ marginTop: "20px", color: "white", fontWeight: 500 }}
            >
              No Movies Found
            </Typography>
          ))}
        {numOfPages > 1 && (
          <Box className={classes.pagBox}>
            <CustomePagination setPage={setPage} numOfPages={numOfPages} />
          </Box>
        )}
      </Container>
    </section>
  );
};

export default MoviesMid;
