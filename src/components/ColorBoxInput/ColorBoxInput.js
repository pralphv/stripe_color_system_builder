import React from "react";
import PropTypes from "prop-types";
import ColorBox from "../ColorBox";

const ColorBoxInput = ({ lch, onClick, id, active }) => {
  return (
      <ColorBox
        lch={lch}
        onClick={onClick}
        id={id}
        active={active}
        isInputBox={true}
      />
  );
};

ColorBoxInput.propTypes = {
  lch: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default ColorBoxInput;
