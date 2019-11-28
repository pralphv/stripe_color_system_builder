import * as types from "./types";

const initState = {
  lower: 0,
  upper: 100
};

export default function lLimit(state = initState, action) {
  switch (action.type) {
    case types.L_LIMIT_CHANGED:
      return {
        lower: action.payload.lowerLimit,
        upper: action.payload.upperLimit
      };

    default:
      return state;
  }
}
