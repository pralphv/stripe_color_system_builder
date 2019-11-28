import * as types from "./types";
import { separateIdSubId } from "../../utils/helper";

// might need to refactor this file
const actionAddColorBoxRow = () => ({
  type: types.ADD_COLOR_BOX_ROW
});

const actionRemoveColorBoxRow = id => ({
  type: types.REMOVE_COLOR_BOX_ROW,
  payload: {
    id
  }
});

const actionActivateColorBox = id => ({
  type: types.ACTIVATE_COLOR_BOX,
  payload: {
    id
  }
});

const actionDeactivateColorBox = () => ({
  type: types.DEACTIVATE_COLOR_BOX,
  payload: {}
});

const actionChangeColorBox = lchObj => ({
  type: types.CHANGE_COLOR_BOX,
  payload: { lchObj }
});

export const actionRecalculateContrast = (newValue, colorBoxRows) => ({
  type: types.RECALCULATE_CONTRAST,
  payload: { newValue, colorBoxRows }
});

export const recalculateContrast = getState => dispatch => {
  dispatch(actionRecalculateContrast(getState()));
};

export const addColorBoxRow = () => dispatch => {
  dispatch(actionAddColorBoxRow());
};

export const removeColorBoxRow = () => (dispatch, getState) => {
  // maybe put this in middleware?
  const state = getState();
  const id = state.colorBox.activeColorBoxId;
  const mainId = separateIdSubId(id).id;
  dispatch(actionRemoveColorBoxRow(mainId));
};

export const activateColorBox = targetColorBoxId => dispatch => {
  dispatch(actionActivateColorBox(targetColorBoxId));
};

export const deactivateColorBox = () => dispatch => {
  dispatch(actionDeactivateColorBox());
};

export const changeColorBox = lchObj => (dispatch, getState) => {
  // put in middleware?
  const state = getState();
  lchObj["id"] = state.changeColorInput.targetColorBoxId;
  lchObj["lLimit"] = state.lLimit;
  lchObj["backgroundColor"] = state.backgroundColor.backgroundColor;
  dispatch(actionChangeColorBox(lchObj));
};
