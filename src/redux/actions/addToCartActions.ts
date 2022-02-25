import { Product } from "../types/addToCartTypes";
import { Cart_ActionType } from "../types/addToCartTypes";

export function addToCart(product: Product, qty: number) {
  console.log(product);
  return {
    type: Cart_ActionType.ADD_TO_CART,
    payload: { product, qty },
  };
}

export function deleteItem(title: string) {
  return {
    type: Cart_ActionType.DELETE_ITEM,
    payload: title,
  };
}

export function darkMood() {
  return {
    type: Cart_ActionType.DARK_MOOD,
  };
}

export function addQty() {
  return {
    type: Cart_ActionType.ADD_QTY,
  };
}

export function subQty() {
  return {
    type: Cart_ActionType.SUB_QTY,
  };
}

export function resetQty() {
  return {
    type: Cart_ActionType.RESET_QTY,
  };
}