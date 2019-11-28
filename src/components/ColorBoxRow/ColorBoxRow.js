import React from "react";
import PropTypes from "prop-types";
import ColorBoxInput from "../ColorBoxInput";
import ColorGradient from "../ColorGradient";

const ColorBoxRow = ({ colorBoxRows, onClick }) => {
  return (
    <div style={{width: 330}}>
      {Object.entries(colorBoxRows).map(([keyI, valueI]) => (
        <div key={keyI + "-container"} style={{display: "table"}}>
          <ColorBoxInput
            lch={valueI.colorInput.lch}
            key={`${keyI}-inputBox}`}
            id={keyI}
            active={valueI.colorInput.active}
            onClick={onClick}
          />
          <ColorGradient
            colorGradient={valueI.colorGradient}
            key={`${keyI}-colorGradient`}
            id={keyI}
            onClick={onClick}
          />
        </div>
      ))}
    </div>
  );
};

ColorBoxRow.propTypes = {
  colorBoxRows: PropTypes.object,
  onClick: PropTypes.func,
};

export default ColorBoxRow;
