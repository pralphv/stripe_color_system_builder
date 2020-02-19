import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { slotsConstants } from "../../constants";

const useStyles = makeStyles(() => ({
  formControl: {
    float: "right"
  }
}));

function SavedOptions({ loadSlot }) {
  const classes = useStyles();
  const [selected, setSelected] = React.useState("custom");

  function handleChange(e) {
    const value = e.target.value;
    setSelected(value);
    loadSlot(value);
  }

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        onChange={handleChange}
      >
        <MenuItem value={slotsConstants.SLOT_CUSTOM}>Custom</MenuItem>
        <MenuItem value={slotsConstants.SLOT_MUI}>Material-UI</MenuItem>
        <MenuItem value={slotsConstants.SLOT_STRIPE}>Stripe</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SavedOptions;
