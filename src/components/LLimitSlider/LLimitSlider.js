import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PropTypes from "prop-types";

export default function LLimitSlider({lLimit, changeLLimit}) {
  const [value, setValue] = React.useState([lLimit.lower, lLimit.upper]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    changeLLimit(newValue[0], newValue[1])
  };

  return (
    <div >
      <Typography id="range-slider" gutterBottom>
        Lightness range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}

LLimitSlider.propTypes = {
  // lLimit: PropTypes.obj, 
  changeLLimit: PropTypes.func
};

