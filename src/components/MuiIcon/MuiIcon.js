import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    opacity: "80%",
    color: "#9b9ac5",
    cursor: "pointer",
    "&:hover": {
      opacity: "100%",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shortest
      })
    }
  }
}));

export default function MuiIcon({ onClick, iconComponent: Icon }) {
  const classes = useStyles();
  return <Icon className={classes.icon} onClick={onClick} />;
}

MuiIcon.propTypes = {
  onClick: PropTypes.func
};

