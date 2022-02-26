import { Product } from "../types/addToCartTypes";
import { Cart_ActionType } from "../types/addToCartTypes";
import { AddToCartAction } from "../types/addToCartTypes";

let initialState = {
  cart: [],
  mood: true,
  qty: 1,
};

type Initial = {
  cart: Cart[];
  mood: boolean;
  qty: number;
};

type Cart = {
  product: Product;
  qty: number;
};

function addToCartReducer(
  state: Initial = initialState,
  action: AddToCartAction
) {
  switch (action.type) {
    case Cart_ActionType.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cart.find(
        (i) => i.product.title === item.product.title
      )
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.product.title === existItem.product.title ? item : i
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, item] };
      }

    case Cart_ActionType.DELETE_ITEM:
      return {
        ...state,
        cart: [...state.cart].filter(
          (item) => item.product.title !== action.payload
        ),
      };

    case Cart_ActionType.DARK_MOOD:
      return {
        ...state,
        mood: !state.mood,
      };
    case Cart_ActionType.ADD_QTY:
      return {
        ...state,
        qty: state.qty + 1,
      };
    case Cart_ActionType.SUB_QTY:
      return {
        ...state,
        qty: state.qty - 1,
      };
    case Cart_ActionType.RESET_QTY:
      return {
        ...state,
        qty: (state.qty = 0),
      };
      case Cart_ActionType.CLEAR_CART: 
      console.log(state.cart)
      return {
        ...state,
        cart:[]
      }  
    default:
      return state;
  }
}

export default addToCartReducer;
