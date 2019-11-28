import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: 12,
    textAlign: "center"
  },
  link: {
    fontSize: 14
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.text}>
      This tool is inspired by
      <span> </span>
      <a
        href="https://stripe.com/en-hk/blog/accessible-color-systems"
        target="_blank"
        className={classes.link}
      >
        Stripe's great article
      </a>
      <span> </span>
      written by Daryl Koopersmith and Wilson Miner
    </Typography>
  );
};

export default Footer;
