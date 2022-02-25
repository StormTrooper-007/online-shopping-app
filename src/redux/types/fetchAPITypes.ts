export type Product = {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: {
        rate: number;
        count: number;
      };
    };
    
    export type InitialState = {
      loading: boolean;
      products: Product[];
    };
    
    export type Api_Success = {
      type: ActionType.API_SUCCESS;
      payload: Product[];
    };
    
    export enum ActionType {
      API_SUCCESS = "API_SUCCESS",
    }
    
    export type FetchApiAction = Api_Success;
    