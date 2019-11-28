import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  loadingScreen: {
    position: "fixed",
    background: "#fff",
    width: "100%",
    height: "100%",
    // opacity: "40%",
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    zIndex: 1500
  },
  text: {
    fontSize: 36,
    position: "fixed",
    color: "black",
    left: "40%",
    top: "40%",
  }
}));

export default function LoadingScreen({ loading }) {
  const classes = useStyles();
  return (
    loading && (
      <div className={classes.loadingScreen}>
        <p className={classes.text}>Loading...</p>
      </div>
    )
  );
}
