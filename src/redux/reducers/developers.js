import {
  FETCH_DEVELOPERS,
  FETCHING_SUCCESS,
  FETCHING_FAILED
} from "../actions/types";
import dummyData from "../../helpers/dummyData";

const { developers } = dummyData;
const initialState = { developers, errorMessage: null, isFetching: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DEVELOPERS:
      return { ...state, isFetching: true };
    case FETCHING_SUCCESS:
      return { ...state, isFetching: false, developers: payload };
    case FETCHING_FAILED:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};
