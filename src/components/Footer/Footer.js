import {
  Box,
  Container,
  Grid,
  Link,
  List,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";

const Footer = () => {
  const classes = useStyles();

  return (
    <section className={classes.footer}>
      <Container>
        <div
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <Box className={classes.titleBox}>
            <Typography variant="h3" className={classes.title}>
              <div className={classes.logo}>
                <PlayCircleFilledOutlinedIcon className={classes.icon} />
              </div>
              iMovies
            </Typography>
          </Box>

          <Grid container spacing={2} className={classes.gridCont}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <List className={classes.li}>
                <Link className={classes.link}>Home</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>Contact Us</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>Terms of services</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>About Us</Link>
              </List>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4}>
              <List className={classes.li}>
                <Link className={classes.link}>Live</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>FAQ</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>Premium</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>Privacy policy</Link>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <List className={classes.li}>
                <Link className={classes.link}>You must watch</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>Recent release</Link>
              </List>
              <List className={classes.li}>
                <Link className={classes.link}>Top IMDB</Link>
              </List>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
