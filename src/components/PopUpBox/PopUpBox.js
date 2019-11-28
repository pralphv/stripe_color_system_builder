import React from "react";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(() => ({
  paper: {
    position: "fixed",
    background: grey[800],
    padding: "15px",
    bottom: 50,
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1500
  }
}));

function PopUpBox({msg, show}) {
  const classes = useStyles();

  return (
    <Fade in={show}>
      <Paper elevation={4} className={classes.paper}>
        <Typography variant="body2">{msg}</Typography>
      </Paper>
    </Fade>
  );
}

export default PopUpBox;