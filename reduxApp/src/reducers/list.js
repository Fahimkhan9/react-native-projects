/* eslint-disable prettier/prettier */
import {
  ADD_SEASON,
  MARK_COMPLETE,
  REMOVE_SEASON,
} from '../actions/action.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEASON:
      return [...state, action.payload];

    case REMOVE_SEASON:
      return state.filter(_season => _season.id !== action.payload);

    case MARK_COMPLETE:
      return state.map(singleseason => {
        if (singleseason.id === action.payload) {
          singleseason.isWatched = !singleseason.isWatched;
        }
        return singleseason;
      });

    default:
      return state;
  }
};
