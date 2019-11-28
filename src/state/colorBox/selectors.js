import { createSelector } from "reselect";

const selectorColorBox = state => state.colorBox;

export const selectorColorBoxRows = state =>
  selectorColorBox(state).colorBoxRows;

export const selectorFormattedColorBoxRows = createSelector(
  [selectorColorBoxRows],
  colorBoxRows => {
    return colorBoxRows;
  }
);

const selectorActiveColorBox_ = state => selectorColorBox(state).activeColorBoxId;

export const selectorActiveColorBox = createSelector(
  [selectorActiveColorBox_],
  activeColorBoxId => {
    return activeColorBoxId;
  }
);
