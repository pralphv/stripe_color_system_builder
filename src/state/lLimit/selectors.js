import { createSelector } from "reselect";

export const selectorLLimit_ = state => state.lLimit;

export const selectorLLimit = createSelector(
  [selectorLLimit_],
  lLimit => {
    return lLimit;
  }
);
