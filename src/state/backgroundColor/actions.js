import * as types from "./types";
import { actionRecalculateContrast } from "../colorBox/actions";

const actionBackgroundColorChanged = value => ({
  type: types.BACKGROUND_COLOR_CHANGED,
  payload: {
    value
  }
});

export const backgroundColorChanged = value => (dispatch, getState) => {
  dispatch(actionBackgroundColorChanged(value));
  dispatch(actionRecalculateContrast(value, getState().colorBox.colorBoxRows));
};
