import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import SinglePageBannerContent from "./SinglePageBannerContent/SinglePageBannerContent";
import Loading from "../../pages/Loading/Loading";
import SinglePageVid from "./SinglePageVid/SinglePageVid";
import Footer from "../../components/Footer/Footer";
import SimilarCarousel from "../SinglePage/SimilarCarousel/SimilarCarousel";
const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    height: "1000px",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "1200px",
    },
  },
  overlay: {
    width: "100%",
    height: "1000px",
    zIndex: -1,
    boxShadow: "rgba(0, 0, 0, .7) 0 0 0 100000px inset",
  },
  similar: {
    paddingTop: "50px",
    paddingBottom: "100px",
    width: "100%",
    height: "auto",
    backgroundColor: "rgb(18,18,18);",
  },
  bigCont: {
    maxWidth: "1800px",
  },
}));

const SinglePage = () => {
  const classes = useStyles();
  let { id, media_type } = useParams();
  const [contDetail, setcontDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        ` https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
      );
      setcontDetail(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <section className={classes.search}>
        <Header />
        <SinglePageBannerContent
          id={id}
          backdrop_path={contDetail.backdrop_path}
          {...contDetail}
          title={contDetail.name || contDetail.title}
        />
      </section>
      <SinglePageVid />
      <div className={classes.similar}>
        <Container className={classes.bigCont}>
          <SimilarCarousel />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
//  backgroundColor: "rgb(18,18,18);",
