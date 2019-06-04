import Axios from "../../services/Axios";
import { FETCHING_SUCCESS, FETCHING_FAILED, FETCH_DEVELOPERS } from "./types";

const success = data => ({ type: FETCHING_SUCCESS, payload: data });
const failed = error => ({ type: FETCHING_FAILED, payload: error });

export const fetchAll = () => async dispatch => {
  try {
    dispatch({ type: FETCH_DEVELOPERS });
    const { data, status } = await Axios.get(
      "/search/users?q=location:lagos+language:java"
    );
    if (status === 200) {
      const { items: developers } = data;
      dispatch(success({ developers, developersCount: developers.length }));
    } else dispatch(failed({ errorMessage: "something went wrong" }));
  } catch (error) {
    console.log("error:", error);
  }
};

export const fetchOne = username => async dispatch => {
  try {
    dispatch({ type: FETCH_DEVELOPERS });
    const { data: currentDev, status } = await Axios.get(`/users/${username}`);
    if (status === 200) dispatch(success({ currentDev }));
    else dispatch(failed({ errorMessage: "something went wrong" }));
  } catch (error) {
    console.log("error:", error);
  }
};
