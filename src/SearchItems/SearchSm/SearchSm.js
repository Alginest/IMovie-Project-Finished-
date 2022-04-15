import { Badge, Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { img_300, unavailable } from "../../config/config";
import { useNavigate } from "react-router-dom";
const SearchSm = ({ id, vote_average, poster, date, media_type, title }) => {
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
          {title ? title : "No Title"}
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
            Type: {media_type === "tv" ? "TV Series" : "Movie"}
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "white", fontWeight: 400 }}
          >
            Date: {date ? date.substring(0, 4) : "2022"}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchSm;
