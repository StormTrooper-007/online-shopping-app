import { QueryActionType } from "../types/queryTypes";
import { InitialState } from "../types/queryTypes";

let initialState = {
  query: "",
};

function queryReducer(
  state: InitialState = initialState,
  action: QueryActionType
) {
  switch (action.type) {
    case "ADD_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
}

export default queryReducer;