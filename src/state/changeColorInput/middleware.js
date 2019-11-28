import { LCH_COLOR_INPUT_CHANGED, COLOR_INPUT_CHANGED } from "./types";
import { lchObjAddLch } from "../../utils/helper";

function delimitColorBoxIdMiddleware() {
  return function(next) {
    return function(action) {
      if (action.type === COLOR_INPUT_CHANGED) {
        let lch = action.payload.lch;
        const lchAlreadyCalculated = !!lch.l;
        if (!lchAlreadyCalculated) {
          lch = lchObjAddLch(lch);
          action.payload = { ...action.payload, lch: lch };
        }
      }
      return next(action);
    };
  };
}

export default [delimitColorBoxIdMiddleware];
