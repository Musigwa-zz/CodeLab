import Axios from '../../services/Axios';
import { FETCHING_SUCCESS, FETCHING_FAILED, FETCH_DEVELOPERS } from './types';

export const success = data => ({ type: FETCHING_SUCCESS, payload: data });
export const failed = error => ({ type: FETCHING_FAILED, payload: error });

export const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: FETCH_DEVELOPERS });
    const { data } = await Axios.get(
      '/search/users?q=location:lagos+language:java'
    );
    const { items: developers } = data;
    dispatch(success({ developers, developersCount: developers.length }));
  } catch (error) {
    dispatch(failed({ errorMessage: 'something went wrong' }));
  }
};

export const fetchOne = username => async dispatch => {
  try {
    dispatch({ type: FETCH_DEVELOPERS });
    const { data: currentDev } = await Axios.get(`/users/${username}`);
    dispatch(success({ currentDev }));
  } catch (error) {
    dispatch(failed({ errorMessage: 'something went wrong' }));
  }
};
