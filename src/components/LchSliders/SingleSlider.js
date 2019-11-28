import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  input: {
    width: 42
  }
});

function SingleSlider({ label, handleChange, value, maxValue, id }) {
  const classes = useStyles();

  return (
    <div>
      <Typography style={{ float: "left" }} gutterBottom>
        {label}
      </Typography>
      <Input
        style={{ float: "right" }}
        id={`${id}-input`}
        className={classes.input}
        value={value}
        margin="dense"
        onChange={e => handleChange(id, e.target.value)}
        onBlur={e => handleChange(id, e.target.value)}
        inputProps={{
          step: 1,
          min: 0,
          max: maxValue,
          type: "number",
          "aria-labelledby": "input-slider"
        }}
      />
      <Slider
        value={value}
        onChange={(e, newValue) => handleChange(id, newValue)}
        onChangeCommitted={(e, newValue) => handleChange(id, newValue)}
        aria-labelledby="input-slider"
        id={`${id}-slider`}
        max={maxValue}
      />
    </div>
  );
}

SingleSlider.propTypes = {
  // label: PropTypes.str,
  handleChange: PropTypes.func,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  // id: PropTypes.str,
};

export default SingleSlider;
