import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import addToCartReducer from "./reducers/addToCartReducer";
import fetchApireducer from "./reducers/fetchApiReducer";
import queryReducer from "./reducers/queryReducer";
import { Product } from "./types/addToCartTypes";

export const composeEnhancer =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  products: fetchApireducer,
  cart: addToCartReducer,
  query: queryReducer,
});

function saveToLocalStorage(state: rootState) {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem("state", localStorageState);
  } catch (e) {
    console.log(e);
  }
}
 

  function loadFromLocalStorage() {
  const localStorageState = localStorage.getItem("state");
  if (localStorageState === null) return undefined;
  return JSON.parse(localStorageState);
}

export const persistedState = loadFromLocalStorage()



const store = createStore(reducers, persistedState, composeEnhancer(applyMiddleware(thunk)));
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

export type rootState = ReturnType<typeof reducers>;
