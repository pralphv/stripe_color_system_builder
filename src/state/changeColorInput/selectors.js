import { createSelector } from "reselect";

export const selectorChangeColorInput = state => state.changeColorInput;

export const selectorFormattedColorInput = createSelector(
  [selectorChangeColorInput],
  changeColorInput => {
    return changeColorInput;
  }
);
