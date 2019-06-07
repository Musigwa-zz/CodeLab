import developers, {
  initialState
} from '../../../src/redux/reducers/developers';
import {
  FETCHING_FAILED,
  FETCHING_SUCCESS,
  FETCH_DEVELOPERS
} from '../../../src/redux/actions/types';

describe('Testing developers reducer', () => {
  test('should return the initialState', () => {
    expect(developers(undefined, {})).toEqual(initialState);
  });

  test('should start fetching the data from an API', () => {
    expect(developers(undefined, { type: FETCH_DEVELOPERS })).toEqual({
      ...initialState,
      isFetching: true
    });
  });

  test('should return the fetched data', () => {
    expect(developers(undefined, { type: FETCHING_SUCCESS })).toEqual({
      ...initialState,
      isFetching: false
    });
  });

  test('should return the fetch error', () => {
    expect(developers(undefined, { type: FETCHING_FAILED })).toEqual({
      ...initialState,
      isFetching: false
    });
  });
});
