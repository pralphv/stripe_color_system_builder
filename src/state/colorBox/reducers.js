import uuid from "uuid";

import { colorGradientConstants } from "../../constants";
import * as types from "./types";
import { separateIdSubId } from "../../utils/helper";

// I REGRET MAKING DEEP NESTED STATES

const initState = {
  colorBoxRows: {},
  activeColorBoxId: "",
  activeSaveSlot: "custom"
};

const initColorBoxState = {
  lch: colorGradientConstants.DEFAULT_INIT_COLOR,
  active: false
};

const INIT_GRADIENT_MAP = {};
for (let i = 0; i < colorGradientConstants.NO_OF_GRADIENTS; i++) {
  INIT_GRADIENT_MAP[i] = { ...initColorBoxState };
}

export default function colorBox(state = initState, action) {
  // dont make deep nested states ever again
  let separatedId;
  let isGradient;
  let id;
  let delimitedId;
  let newObj;

  switch (action.type) {
    case types.ADD_COLOR_BOX_ROW:
      return {
        ...state,
        colorBoxRows: {
          ...state.colorBoxRows,
          [uuid.v4()]: {
            colorInput: {
              lch: colorGradientConstants.DEFAULT_INIT_COLOR,
              active: false
            },
            colorGradient: {
              ...INIT_GRADIENT_MAP
            }
          }
        }
      };
    case types.REMOVE_COLOR_BOX_ROW:
      id = action.payload.id;
      newObj = Object.assign({}, state.colorBoxRows)
      delete newObj[id];
      return {
        activeColorBoxId: "",
        colorBoxRows: {
          ...newObj
        }
      };
    case types.ACTIVATE_COLOR_BOX:
      delimitedId = action.payload.delimitedId;
      id = action.payload.id;
      if (action.payload.isGradient) {
        const i = action.payload.colorGradientIndex;
        return {
          ...state,
          activeColorBoxId: id,
          colorBoxRows: {
            ...state.colorBoxRows,
            [delimitedId]: {
              ...state.colorBoxRows[delimitedId],
              colorGradient: {
                ...state.colorBoxRows[delimitedId].colorGradient,
                [i]: {
                  ...state.colorBoxRows[delimitedId].colorGradient[i],
                  active: true
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          activeColorBoxId: id,
          colorBoxRows: {
            ...state.colorBoxRows,
            [id]: {
              ...state.colorBoxRows[id],
              colorInput: {
                ...state.colorBoxRows[id].colorInput,
                active: true
              }
            }
          }
        };
      }
    case types.DEACTIVATE_COLOR_BOX:
      // find current activated box, then turn false
      const activeColorBoxId = state.activeColorBoxId;
      if (!activeColorBoxId) {
        return state;
      }
      separatedId = separateIdSubId(activeColorBoxId);
      isGradient = separatedId.subId ? true : false;
      if (isGradient) {
        return {
          ...state,
          activeColorBoxId: "",
          colorBoxRows: {
            ...state.colorBoxRows,
            [separatedId.id]: {
              ...state.colorBoxRows[separatedId.id],
              colorGradient: {
                ...state.colorBoxRows[separatedId.id].colorGradient,
                [separatedId.subId]: {
                  ...state.colorBoxRows[separatedId.id].colorGradient[
                    separatedId.subId
                  ],
                  active: false
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          activeColorBoxId: "",
          colorBoxRows: {
            ...state.colorBoxRows,
            [separatedId.id]: {
              ...state.colorBoxRows[separatedId.id],
              colorInput: {
                ...state.colorBoxRows[separatedId.id].colorInput,
                active: false
              }
            }
          }
        };
      }
    case types.CHANGE_COLOR_BOX:
      const targetId = state.activeColorBoxId;
      const newValue = action.payload.lchObj;
      if (!targetId) {
        return state;
      }
      separatedId = separateIdSubId(targetId);
      isGradient = separatedId.subId ? true : false;

      if (isGradient) {
        return {
          ...state,
          colorBoxRows: {
            ...state.colorBoxRows,
            [separatedId.id]: {
              ...state.colorBoxRows[separatedId.id],
              colorGradient: {
                ...state.colorBoxRows[separatedId.id].colorGradient,
                [separatedId.subId]: {
                  ...state.colorBoxRows[separatedId.id].colorGradient[
                    separatedId.subId
                  ],
                  lch: newValue,
                  contrast: action.payload.contrast
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          colorBoxRows: {
            ...state.colorBoxRows,
            [separatedId.id]: {
              ...state.colorBoxRows[separatedId.id],
              colorInput: {
                ...state.colorBoxRows[separatedId.id].colorInput,
                lch: newValue
              },
              colorGradient: action.payload.colorGradient
            }
          }
        };
      }
    case types.RECALCULATE_CONTRAST:
      return { ...state, colorBoxRows: action.payload.colorBoxRows };

    default:
      return state;
  }
}
