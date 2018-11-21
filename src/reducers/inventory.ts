import { actionTypes } from '../common/constants/actionTypes';

export const inventoryReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.DEMO:
      return state;
  }
  return state;
};

