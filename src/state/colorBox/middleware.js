import {
  ACTIVATE_COLOR_BOX,
  CHANGE_COLOR_BOX,
  RECALCULATE_CONTRAST
} from "./types";
import { ID_DELIMITER, NO_OF_GRADIENTS } from "../../constants/colorGradient";
import { separateIdSubId } from "../../utils/helper";
import { lchToHex, hexToContrast } from "../../utils/helper";

function colorBoxMiddleware() {
  return function(next) {
    return function(action) {
      switch (action.type) {
        case ACTIVATE_COLOR_BOX:
          const id = action.payload.id;
          if (id.includes(ID_DELIMITER)) {
            const separatedId = separateIdSubId(id);
            action.payload = {
              ...action.payload,
              isGradient: true,
              delimitedId: separatedId.id,
              colorGradientIndex: separatedId.subId
            };
          } else {
            action.payload = {
              ...action.payload,
              isGradient: false
            };
          }
          break;
        case CHANGE_COLOR_BOX:
          const isInput = !action.payload.lchObj.id.includes("@");
          if (isInput) {
            const lch = action.payload.lchObj;
            const backgroundColor = lch.backgroundColor;
            const lLimit = lch.lLimit;
            const step = (lLimit.upper - lLimit.lower) / (NO_OF_GRADIENTS - 1);
            let l = 0;
            let obj = {};
            let hex = "";
            const colorGradient = {};
            let contrast = null;
            for (let i = 0; i < NO_OF_GRADIENTS; i++) {
              l = lLimit.lower + step * i;
              l = Math.round(l);
              obj = { l: l, c: lch.c, h: lch.h };
              hex = lchToHex(obj);
              contrast = hexToContrast(backgroundColor, hex);
              obj = {
                active: false,
                lch: { ...obj, hex: hex },
                contrast: contrast
              };
              colorGradient[i] = obj;
            }
            action.payload = {
              ...action.payload,
              colorGradient: colorGradient
            };
          } else {
            const backgroundColor = action.payload.lchObj.backgroundColor;
            const hex = action.payload.lchObj.hex;
            const contrast = hexToContrast(backgroundColor, hex);
            action.payload = {
              ...action.payload,
              contrast: contrast
            };
          }
          break;
        case RECALCULATE_CONTRAST:
          const newBgColor = action.payload.newValue;
          const oldColorRow = action.payload.colorBoxRows;
          let newContrast = null;
          let newObj = {};
          Object.entries(oldColorRow).forEach(([key1, value1]) => {
            const obj1 = { ...value1 };
            Object.entries(value1.colorGradient).forEach(([key2, value2]) => {
              newContrast = hexToContrast(value2.lch.hex, newBgColor);
              obj1.colorGradient[key2].contrast = newContrast;
              newObj[key1] = obj1;
            });
          });
          action.payload = {
            ...action.payload,
            colorBoxRows: newObj
          };
          break;
      }
      return next(action);
    };
  };
}

export default [colorBoxMiddleware];
