import * as types from "./types";

const actionLLimitChanged = (lowerLimit, upperLimit) => ({
  type: types.L_LIMIT_CHANGED,
  payload: {
    lowerLimit,
    upperLimit
  }
});

export const changeLLimit = (lowerLimit, upperLimit) => dispatch => {
  dispatch(actionLLimitChanged(lowerLimit, upperLimit));
};

