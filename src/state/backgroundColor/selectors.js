import { createSelector } from "reselect";

export const selectorbgColor = state => state.backgroundColor;
export const selectorbgColorValue = state => selectorbgColor(state).backgroundColor;
/*
{
    backgroundColor: 
        backgroundColor: "#ffffff"
}
*/
export const selectorBackgroundColor = createSelector(
  [selectorbgColorValue],
  backgroundColor => {
    return backgroundColor;
  }
);
