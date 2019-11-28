import * as types from "./types";
import { colorGradientConstants } from "../../constants";

const initState = {
  targetColorBoxId: "",
  lch: colorGradientConstants.DEFAULT_INIT_COLOR
};

export default function changeColorInput(state = initState, action) {
  switch (action.type) {
    case types.FOCUS_COLOR_BOX:
      return {
        ...state,
        targetColorBoxId: action.payload.targetColorBoxId,
        lch: action.payload.lch
      };

    case types.COLOR_INPUT_CHANGED:
      return {
        ...state,
        lch: action.payload.lchObj
      };

    case types.LCH_COLOR_INPUT_CHANGED:
      return {
        ...state,
        lch: action.payload.lch
      };

    default:
      return state;
  }
}
