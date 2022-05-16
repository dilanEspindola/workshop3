import { types } from "../types/types";

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case types.update:
      return {
        ...state,
      };

    default:
      return state;
  }
};
