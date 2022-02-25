export type InitialState = {
      query: string;
    };
    
    export type Add_Query = {
      type: "ADD_QUERY";
      payload: string;
    };
    
    export type QueryActionType = Add_Query;