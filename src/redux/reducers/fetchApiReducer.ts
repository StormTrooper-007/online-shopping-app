import {
      InitialState,
      ActionType,
      FetchApiAction,
    } from "../types/fetchAPITypes";
    
    const initialState = {
      loading: true,
      products: [],
    };
    
    function fetchApireducer(
      state: InitialState = initialState,
      action: FetchApiAction
    ) {
      switch (action.type) {
        case ActionType.API_SUCCESS:
          return {
            loading: false,
            products: action.payload,
          };
        default:
          return state;
      }
    }
    
    export default fetchApireducer;