import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import axios from "axios";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    width: "923px",
    height: "480px",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
  paper: {
    backgroundColor: "#222",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
    width: "1000px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  outBtn: {
    width: "220px",
    height: "50px",
    borderRadius: "30px",
    fontSize: 20,
    fontWeight: 700,
    borderColor: "white",
    color: "white",
    marginLeft: "30px",
    transition: "all 0.3s ease-in",
    "&:hover": {
      backgroundColor: "white",
      color: "red",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
      marginTop: "30px",
    },
  },
  smBtn: {
    position: "absolute",
    top: 0,
    right: -10,
    color: "white",
  },
}));

export default function TransitionsModal({ id, media_type }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [video, setVideo] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchVideo();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Button
        variant="outlined"
        type="button"
        className={classes.outBtn}
        onClick={handleOpen}
      >
        Watch Trailer
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <iframe
              width="923"
              height="480"
              src={`https://www.youtube-nocookie.com/embed/${video}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className={classes.frame}
            />
            <Button className={classes.smBtn} onClick={handleClose}>
              <CancelIcon />
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
