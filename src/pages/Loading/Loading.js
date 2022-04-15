import { CircularProgress } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <CircularProgress color="secondary" size="200px" />
    </div>
  );
};

export default Loading;
