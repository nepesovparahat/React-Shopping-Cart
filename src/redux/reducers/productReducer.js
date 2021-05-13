import * as actionTypes from "../constants/actionType";
import data from "../../assets/data";
const initialState = {
  products: data,
  cart: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS:
      return { ...state, products: action.payload };
    case actionTypes.ADD_ITEMS:
      // Cet the items data from the prudcts array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if item is in cart already
      const in_cart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: in_cart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case actionTypes.DELETE_ITEMS:
      return {};
    case actionTypes.INCREASE_ITEMS:
      return {};
    case actionTypes.DECREASE_ITEMS:
      return {};

    default:
      return state;
  }
};
