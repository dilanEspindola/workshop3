import { types } from '../types/types';

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case types.addUser:
      return {
        state,
      };
    case types.updateUser:
      return {
        state,
      };

    default:
      return state;
  }
};
