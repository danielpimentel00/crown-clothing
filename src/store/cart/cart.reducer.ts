import { AnyAction } from "redux";

import { setCartItems, SetCartItems, setIsCartOpen } from "./cart.action";

import { CartItem, CART_ACTION_TYPES } from "./cart.types";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
