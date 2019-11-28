import * as types from "./types";

const actionLoadSlot = slot => ({
  type: types.LOAD_SLOT,
  payload: { slot }
});

export const loadSlot = slot => dispatch => {
  dispatch(actionLoadSlot(slot));
};

