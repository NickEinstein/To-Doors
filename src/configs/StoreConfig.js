import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { throttle } from "utils/FunctionUtils";
import { isObjectEmpty, deepMerge } from "utils/ObjectUtils";
import { logoutAction } from "./StoreActionConfig";
import { SoftwrkApi } from "./StoreQueryConfig";
import globalSlice, {
  getGlobalSliceStorageState,
  globalInitialState,
} from "./StoreSliceConfig";

const store = configureStore({
  reducer: {
    [SoftwrkApi.reducerPath]: SoftwrkApi.reducer,
    [globalSlice.name]: globalSlice.reducer,
  },
  preloadedState: loadState({
    [globalSlice.name]: globalInitialState,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      SoftwrkApi.middleware,
      rtkqOnResetMiddleware(SoftwrkApi)
    ),
});

setupListeners(store.dispatch);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState({
      [globalSlice.name]: getGlobalSliceStorageState(state[globalSlice.name]),
    });
  }, 1000)
);

export default store;

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("@state", serializedState);
  } catch (error) {}
}

function loadState(initialState = {}) {
  try {
    const newState = Object.assign({}, initialState);
    const storageState = getLocalStorageState();
    if (storageState && !isObjectEmpty(storageState)) {
      Object.assign(newState, deepMerge(newState, storageState));
    }
    return newState;
  } catch (error) {}
  return undefined;
}

function getLocalStorageState() {
  const serializedState = localStorage.getItem("@state");
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return null;
}

export function rtkqOnResetMiddleware(...apis) {
  return (store) => (next) => (action) => {
    const result = next(action);
    if (logoutAction.match(action)) {
      for (const api of apis) {
        store.dispatch(api.util.resetApiState());
      }
    }
    return result;
  };
}
