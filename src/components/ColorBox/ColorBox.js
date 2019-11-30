import React, { useState } from "react";
import PropTypes from "prop-types";
import { hexToContrast } from "../../utils/helper";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PopUpBox from "../PopUpBox";

const colorChoices = ["#ffffff", "#121212"];

function ColorBox({ lch, active, onClick, id, contrast, isInputBox = false }) {
  const [copied, setCopied] = useState(false);

  function handleOnCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  let fontColor = colorChoices[0];

  if (hexToContrast(lch.hex, fontColor) < 3) {
    fontColor = colorChoices[1];
  }
  let boxStyle = {
    fontSize: "12px",
    textAlign: "center",
    background: `${lch.hex}`,
    minWidth: "25px",
    height: "40px",
    color: `${fontColor}`,
    display: "table-cell",
    "verticalAlign": "bottom"
  };

  if (active) {
    boxStyle["boxShadow"] = `0 0 5px ${fontColor} inset`;
  }

  if (isInputBox) {
    boxStyle["borderRight"] = "10px solid #1e1e1e";
  }

  return (
    <div style={{ display: "table-cell" }}>
      <CopyToClipboard text={`${lch.hex}`} onCopy={handleOnCopy}>
        <div
          style={boxStyle}
          id={id}
          onClick={() => onClick({ id: id, lch: lch })}
        >
          {contrast && roundDown(contrast)}
        </div>
      </CopyToClipboard>
      <PopUpBox msg="Copied to clipboard" show={copied} />
    </div>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string,
  contrast: PropTypes.number,
  isInputBox: PropTypes.bool
};

function roundDown(value) {
  return Math.floor(value * 10) / 10;
}

export default ColorBox;
