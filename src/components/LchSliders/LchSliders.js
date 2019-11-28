import React, { useEffect } from "react";
import SingleSlider from "./SingleSlider";
import { minMaxValue } from "../../utils/helper";
import PropTypes from "prop-types";

export default function LchSliders({ lchColorInputChanged, lchAndId }) {
  const lch = lchAndId.lch;
  const [l, setL] = React.useState(lch.l);
  const [c, setC] = React.useState(lch.c);
  const [h, setH] = React.useState(lch.h);
  useEffect(() => {
    setL(lch.l);
    setC(lch.c);
    setH(lch.h);
  }, [lchAndId.targetColorBoxId, lch.hex]);

  function getLch() {
    return { l: l, c: c, h: h };
  }

  const lch_map = {
    l: {
      max: 100,
      setter: setL,
      value: l,
      label: "Lightness"
    },
    c: {
      max: 140,
      setter: setC,
      value: c,
      label: "Chroma"
    },
    h: {
      max: 360,
      setter: setH,
      value: h,
      label: "Hue"
    }
  };

  const handleChange = (id, newValue) => {
    // redux update might need to leave to OnDragEnd
    // might be too slow
    newValue = Number(newValue);
    newValue = minMaxValue(newValue, 0, lch_map[id].max);
    lch_map[id].setter(newValue);
    lchColorInputChanged(getLch());
  };

  return (
    <div>
      {Object.keys(lch_map).map(key => (
        <SingleSlider
          label={lch_map[key].label}
          handleChange={handleChange}
          value={lch_map[key].value}
          maxValue={lch_map[key].max}
          key={key}
          id={key}
        />
      ))}
    </div>
  );
}

LchSliders.propTypes = {
  lchColorInputChanged: PropTypes.func,
  // lchAndId: PropTypes.obj,
};
