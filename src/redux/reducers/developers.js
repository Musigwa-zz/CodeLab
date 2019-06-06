import {
  FETCH_DEVELOPERS,
  FETCHING_SUCCESS,
  FETCHING_FAILED,
} from '../actions/types';

export const initialState = {
  developers: [],
  currentDev: {},
  errorMessage: null,
  isFetching: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DEVELOPERS:
      return { ...state, isFetching: true };
    case FETCHING_SUCCESS:
      return { ...state, isFetching: false, ...payload };
    case FETCHING_FAILED:
      return { ...state, isFetching: false, ...payload };
    default:
      return state;
  }
};
