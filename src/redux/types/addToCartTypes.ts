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
      products: Product;
    };
    
    export enum Cart_ActionType {
      ADD_TO_CART = "ADD_TO_CART",
      DELETE_ITEM = "DELETE_ITEM",
      DARK_MOOD = "DARK_MOOD",
      ADD_QTY = "ADD_QTY",
      SUB_QTY = "SUB_QTY",
      RESET_QTY = "RESET_QTY",
      CLEAR_CART = "CLEAR_CART"}
    
    export type Add_To_Cart = {
      type: Cart_ActionType.ADD_TO_CART;
      payload: { product: Product; qty: number };
    };
    
    export type DeleteItem = {
      type: Cart_ActionType.DELETE_ITEM;
      payload: string;
    };
    
    export type DarkMood = {
      type: Cart_ActionType.DARK_MOOD;
    };
    
    export type AddQty = {
      type: Cart_ActionType.ADD_QTY;
    };
    
    export type SubQty = {
      type: Cart_ActionType.SUB_QTY;
    };
    
    export type ResetQty = {
      type: Cart_ActionType.RESET_QTY;
    };

    export type ClearCart = {
      type: Cart_ActionType.CLEAR_CART;
    };


    
    export type AddToCartAction =
      | Add_To_Cart
      | DeleteItem
      | DarkMood
      | AddQty
      | SubQty
      | ResetQty
      | ClearCart;