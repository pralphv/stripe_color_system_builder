import { createSelector } from "reselect";

const selectorLoading_ = state => state.loading;

export const selectorLoading = createSelector(
  [selectorLoading_],
  loading => {
    return loading;
  }
);
