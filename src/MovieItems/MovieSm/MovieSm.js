import { Badge, Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { img_300, unavailable } from "../../config/config";
import { useNavigate } from "react-router-dom";

const MovieSm = ({ id, title, vote_average, poster, date, media_type }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/${media_type}/${id}`)}
      className={classes.link}
    >
      <Paper className={classes.movie} elevation={3}>
        <Badge
          badgeContent={vote_average}
          className={classes.badge}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className={classes.poster}
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          {title.substring(0, 20)}
        </Typography>
        <Box
          style={{
            display: "flex",
            width: "90%",
            margin: "0 5%",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            style={{ color: "white", fontWeight: 400 }}
          >
            Type: {media_type}
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "white", fontWeight: 400 }}
          >
            Date: {date.substring(0, 4)}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default MovieSm;
