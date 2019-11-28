import uuid from "uuid";

import { colorGradientConstants } from "../../constants";
import * as types from "./types";
import { separateIdSubId } from "../../utils/helper";

// I REGRET MAKING DEEP NESTED STATES

const initState = {
  activeSaveSlot: "custom"
};


export default function loadSlot(state = initState, action) {
  // dont make deep nested states ever again
  switch (action.type) {

    default:
      return state;
  }
}
