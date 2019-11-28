import React from "react";
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ReactColor from "../ReactColor";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";

export default function BackgroundColorPicker({
  changeBackgroundColor,
  backgroundColor
}) {
  const [value, setValue] = React.useState(backgroundColor);
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

  const handleChange = e => {
    const newValue = e.hex || e.target.value;
    setValue(newValue);
    changeBackgroundColor(newValue);
  };

  const openColorPicker = () => {
    setDisplayColorPicker(true);
  };

  const closeColorPicker = () => {
    setDisplayColorPicker(false);
  };

  return (
    <div style={{height: 35}}>
      <Typography gutterBottom style={{ float: "left" }}>
        Background
      </Typography>
      <ClickAwayListener onClickAway={closeColorPicker}>
        <div style={{}}>
          <Input
            margin="dense"
            value={value}
            onChange={handleChange}
            onClick={openColorPicker}
            style={{ float: "right", width: 70 }}
          />

          {displayColorPicker && (
            <ReactColor value={value} handleColorPickerChange={handleChange} />
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

BackgroundColorPicker.propTypes = {
  changeBackgroundColor: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired
};
