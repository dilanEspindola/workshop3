import { types } from "../types/types";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      return {
        products: [action.payload],
      };

    case types.listProducts:
      return {
        products: [...action.payload],
      };

    case types.deleteProduct:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case types.detailProduct:
      return {
        ...action.payload.data(),
      };

    case types.searchProduct:
      return {
        products: [action.payload],
      };

    default:
      return state;
  }
};

export default productsReducer;
