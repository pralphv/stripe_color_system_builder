import { combineReducers } from 'redux';

import { reducer as colorBoxReducer } from './colorBox';
import { reducer as changeColorReducer } from './changeColorInput';
import { reducer as lLimitedSliderReducer } from './lLimit';
import { reducer as backgroundColorReducer } from './backgroundColor';
import { reducer as loadingReducer } from './loading';
import { reducer as loadSlotReducer } from './loadSlot';
import { middleware as colorBoxMiddleWare } from './colorBox';

export default combineReducers({
  colorBox: colorBoxReducer,
  changeColorInput: changeColorReducer,
  lLimit: lLimitedSliderReducer,
  backgroundColor: backgroundColorReducer,
  loading: loadingReducer,
  activeSaveSlot: loadSlotReducer
});
export const customMiddlewares = [...colorBoxMiddleWare];