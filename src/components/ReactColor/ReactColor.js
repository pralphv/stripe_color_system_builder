import { ChromePicker } from "react-color";
import React from "react";

export default function ReactColor({value, handleColorPickerChange}) {
  return (
    <div style={{ position: "absolute", zIndex: 1100, marginTop: 25}}>
      <ChromePicker color={value} onChange={handleColorPickerChange} />
    </div>
  );
}
