import {ADD_SEASON, MARK_COMPLETE, REMOVE_SEASON} from './action.types';

export const addSeason = season => {
  return {
    type: ADD_SEASON,
    payload: season,
  };
};

export const removeSeason = id => {
  return {
    type: REMOVE_SEASON,
    payload: id,
  };
};

export const markComplete = id => {
  return {
    type: MARK_COMPLETE,
    payload: id,
  };
};
