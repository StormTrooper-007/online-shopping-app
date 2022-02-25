import { Dispatch } from "redux";
import { ActionType } from "../types/fetchAPITypes";

export function fetchApiAction() {
  return async (dispatch: Dispatch) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    dispatch({ type: ActionType.API_SUCCESS, payload: products });
  };
}