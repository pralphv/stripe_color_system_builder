import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { lchObjAddLch } from "../../utils/helper";
import ReactColor from "../ReactColor";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

const ChangeColorInput = ({ lch, changeColorBox, colorInputChanged }) => {
  const [backgroundHex, setBackgroundHex] = useState(lch.hex);
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);

  function handleOnChange(e) {
    // hex.lch should be in a middleware
    // however there are multiple actions
    // and i dont want to recalculate
    const hex = e.hex || e.target.value;
    let lchObj = { hex: hex };
    lchObj = lchObjAddLch(lchObj);
    changeColorBox(lchObj);
    colorInputChanged(lchObj);
    setBackgroundHex(lchObj.hex);
  }

  useEffect(() => {
    setBackgroundHex(lch.hex);
  }, [lch.hex]);

  const openColorPicker = () => {
    setDisplayColorPicker(true);
  };

  const closeColorPicker = () => {
    setDisplayColorPicker(false);
  };

  return (
    <div style={{height: 35}}>
      <Typography gutterBottom style={{ float: "left" }}>
        Color
      </Typography>
      <ClickAwayListener onClickAway={closeColorPicker}>
        <div>
          <Input
            onBlur={handleOnChange}
            onChange={handleOnChange}
            placeholder="hex"
            value={backgroundHex}
            onClick={openColorPicker}
            style={{ float: "right", width: 70 }}
          />
          {displayColorPicker && (
            <ReactColor
              value={backgroundHex}
              handleColorPickerChange={handleOnChange}
            />
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
};

ChangeColorInput.propTypes = {
  changeColorInputHex: PropTypes.string,
  changeColorBox: PropTypes.func.isRequired,
  colorInputChanged: PropTypes.func.isRequired
};

export default ChangeColorInput;
