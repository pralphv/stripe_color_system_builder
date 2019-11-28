import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles(() => ({
  resetIcon: {
    float: "right",
    cursor: "pointer",
    fontSize: 20,
    marginTop: 5,
    marginRight: 10,
    "&:hover": {
      color: grey[500]
    }
  }
}));

function ResetButton({resetState} ) {
  const classes = useStyles();

  function handleOnClick() {
    resetState();
  }

  return (
    <SettingsBackupRestoreIcon
      color="secondary"
      className={classes.resetIcon}
      onClick={handleOnClick}
    />
  );
}

export default ResetButton;
