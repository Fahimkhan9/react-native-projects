/* eslint-disable prettier/prettier */
import {IS_AUTHENTICATED, SET_USER} from '../action/action.types';

const initialState = {
  user: null,
  loading: true,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.paylaod,
        loading: false,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.paylaod,
        loading: false,
      };

    default:
      return state;
  }
};
