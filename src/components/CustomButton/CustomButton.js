import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  customButton: {
    marginBottom: theme.spacing(1),
    padding: "2px"
  }
}));

const CustomButton = ({ handleOnClick, type }) => {
  const classes = useStyles();
  const typeMap = {
    add: {
      variant: "contained",
      text: "Add"
    },
    delete: {
      variant: "outlined",
      text: "Delete"
    }
  };
  return (
    <Button
      variant={typeMap[type].variant}
      size="small"
      color="secondary"
      className={classes.customButton}
      onClick={handleOnClick}
    >
      {typeMap[type].text}
    </Button>
  );
};

CustomButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default CustomButton;
