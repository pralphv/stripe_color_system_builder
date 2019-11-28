import * as types from "./types";

const actionResetState = () => ({
  type: types.RESET
});

export const resetState = () => dispatch => {
  dispatch(actionResetState());
};
