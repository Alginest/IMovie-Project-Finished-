import React, { useEffect, useState } from "react";
import SeriesBanner from "../../SeriesItems/SeriesBanner/SeriesBanner";
import SeriesMid from "../../SeriesItems/SeriesMid/SeriesMid";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [page, setPage] = useState(2);

  const fetchSeries = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      setSeries(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page]);
  return (
    <div>
      <SeriesBanner series={series} loading={loading} />
      <SeriesMid series={series} />
      <Footer />
    </div>
  );
};

export default Series;
