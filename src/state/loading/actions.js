import * as types from "./types";

export const actionSwitchToLoading = () => ({
  type: types.SWITCH_TO_LOADING
});

export const actionFinishedLoading = () => ({
  type: types.FINISHED_LOADING
});

export const switchToLoading = () => dispatch => {
  dispatch(actionSwitchToLoading());
};

