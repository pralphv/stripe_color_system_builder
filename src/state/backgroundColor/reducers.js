import * as types from "./types";

const initState = {
  backgroundColor: "#FFFFFF",
};

export default function backgroundColor(state = initState, action) {
  switch (action.type) {
    case types.BACKGROUND_COLOR_CHANGED:
      return {
        ...state,
        backgroundColor: action.payload.value
      };
    default:
      return state;
  }
}
