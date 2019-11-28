import { SWITCH_TO_LOADING, FINISHED_LOADING } from "./types";

const initState = {
  loading: false
};

export default function loading(state = initState, action) {
  switch (action.type) {
    case SWITCH_TO_LOADING:
      return { loading: true };
    case FINISHED_LOADING:
      return { loading: false };
    default:
      return state;
  }
}
