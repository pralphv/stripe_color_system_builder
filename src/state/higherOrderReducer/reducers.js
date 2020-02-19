import { loadSlotTypes } from "../loadSlot";
import { resetStateTypes } from "../resetState";
import * as localStorageUtils from "../../utils/localStorage";
import { slotsConstants } from "../../constants";

// all of these obviously should be in middleware
// but just to avoid further complication,
// i decided not to add a middleware to a HO reducer

export default function higherOrderReducer(reducers) {
  return function(state = {}, action) {
    switch (action.type) {
      case loadSlotTypes.LOAD_SLOT:
        localStorageUtils.saveToLocalStorage(state); // probably should separate this action
        const targetSlot = action.payload.slot;
        const loadedState = localStorageUtils.loadFromLocalStorage(targetSlot);
        return loadedState;

      case resetStateTypes.RESET:
        if (state.activeSaveSlot.activeSaveSlot === slotsConstants.SLOT_MUI) {
          return slotsConstants.MUI_SAMPLE;
        } else if (
          state.activeSaveSlot.activeSaveSlot === slotsConstants.SLOT_STRIPE
        ) {
          return slotsConstants.STRIPE_SAMPLE;
        } else {
          return slotsConstants.CUSTOM_INIT;
        }

      default:
        return reducers(state, action);
    }
  };
}
