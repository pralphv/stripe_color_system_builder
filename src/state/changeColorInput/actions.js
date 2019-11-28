import * as types from "./types";
import {
  activateColorBox,
  deactivateColorBox,
  changeColorBox
} from "../colorBox/actions";
import { lchObjAddHex } from "../../utils/helper";

const actionFocusColorBox = (targetColorBoxId, lch) => ({
  type: types.FOCUS_COLOR_BOX,
  payload: {
    targetColorBoxId,
    lch
  }
});

const actionColorInputChanged = lchObj => ({
  type: types.COLOR_INPUT_CHANGED,
  payload: {
    lchObj
  }
});

const actionLchColorInputChanged = lch => ({
  type: types.LCH_COLOR_INPUT_CHANGED,
  payload: {
    lch
  }
});

export const focusColorBox = ({ id, lch }) => (dispatch, getState) => {
  dispatch(deactivateColorBox());
  // if id is not provided, focus on the newest box
  if (id) {
    dispatch(activateColorBox(id));
    dispatch(actionFocusColorBox(id, lch));
  } else {
    const state = getState();
    const targetObj = state.colorBox.colorBoxRows;
    if (Object.keys(targetObj).length === 0) {
      return
    }
    const listOfColorBoxIds = Object.keys(targetObj);
    const newestRowId = listOfColorBoxIds[listOfColorBoxIds.length - 1];
    const newestRowLch = targetObj[newestRowId].colorInput.lch;
    dispatch(activateColorBox(newestRowId));
    dispatch(actionFocusColorBox(newestRowId, newestRowLch));
  }
};

export const colorInputChanged = lchObj => dispatch => {
  dispatch(actionColorInputChanged(lchObj));
};

export const lchColorInputChanged = lchObj => dispatch => {
  // lchObjAddHex should be in a middleware
  // however there are multiple actions that needs lchObj
  // and i dont want to recalculate
  lchObj = lchObjAddHex(lchObj);
  dispatch(actionLchColorInputChanged(lchObj));
  dispatch(actionColorInputChanged(lchObj));
  dispatch(changeColorBox(lchObj));
};
