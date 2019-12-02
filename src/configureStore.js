import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import throttle from "lodash.throttle";

import rootReducer from "./state";
import { customMiddlewares } from "./state";
import * as localStorageUtils from "./utils/localStorage";
import higherOrderReducer from "./state/higherOrderReducer/reducers";

const logger = createLogger({
  // ...options
});

const middleWares = [thunk, logger, ...customMiddlewares];

const store = createStore(
  higherOrderReducer(rootReducer),
  localStorageUtils.loadFromLocalStorage(),
  applyMiddleware(...middleWares)
);

store.subscribe(
  throttle(() => {
    localStorageUtils.saveToLocalStorage(store.getState());
  }, 5000)
);

export default store;
