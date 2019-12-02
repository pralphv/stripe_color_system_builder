import React from "react";
import PropTypes from "prop-types";
import ColorBox from "../ColorBox";
import { ID_DELIMITER } from "../../constants/colorGradient";

const ColorGradient = ({ colorGradient, handleOnClick, onClick, id }) => {
  const oneLineStyle = { display: "flex", flexDirection: "row" };
  return (
    <div style={oneLineStyle}>
      {Object.entries(colorGradient).map(([key, value]) => (
        <ColorBox
          lch={value.lch}
          key={`${key}-gradient`}
          active={value.active}
          onClick={onClick}
          id={`${id}${ID_DELIMITER}${key}`}
          contrast={value.contrast}
        />
      ))}
    </div>
  );
};
ColorGradient.propTypes = {
  colorGradient: PropTypes.object,
  handleOnClick: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default ColorGradient;
