import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";

import { urls } from "../../constants";
import { MuiIcon } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#191928",
    width: "100%",
    position: "absolute",
    marginTop: "2em",
    paddingTop: "0.5em",
    minHeight: "10vh"
  },
  text: {
    opacity: "80%",
    padding: theme.spacing(1),
    lineHeight: "2em",
    fontWeight: "300",
    color: "#9EA5C7",
    cursor: "pointer",
    "&:hover": {
      opacity: "100%",
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shortest
      })
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Grid spacing={2} container direction="row" alignItems="center">
            <Grid item>
              <MuiIcon
                iconComponent={GitHubIcon}
                onClick={() => openNewTab(urls.GITHUB_URL)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            className={classes.text}
            variant="caption"
            align="center"
            color="primary"
            onClick={() => openNewTab(urls.STRIPE_URL)}
          >
            This tool is inspired by Stripe's great article written by Daryl
            Koopersmith and Wilson Miner
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

function openNewTab(url) {
  window.open(url, "_blank");
}
