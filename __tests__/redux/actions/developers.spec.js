import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { fetchAll, fetchOne } from "../../../src/redux/actions/developers";
import Axios from "../../../src/services/Axios";
import {
  FETCH_DEVELOPERS,
  FETCHING_SUCCESS,
  FETCHING_FAILED
} from "../../../src/redux/actions/types";
import { baseURL } from "../../../src/helpers/constants";

const mockStore = configureMockStore([thunk]);
let store;
const developers = [
  { login: "moyheen", id: 8110201, score: 1 },
  { login: "o-kamiye", id: 4929406, score: 1 }
];

describe("Testing developers' action creators", () => {
  beforeEach(() => {
    moxios.install(Axios);
    store = mockStore({});
  });
  afterEach(() => moxios.uninstall(Axios));

  describe("Test fetchAll developers", () => {
    test("should fetch data and dispatch them into the store", async () => {
      const expectedActions = [
        { type: FETCH_DEVELOPERS },
        {
          type: FETCHING_SUCCESS,
          payload: { developers, developersCount: 2 }
        }
      ];
      await moxios.stubRequest(
        `${baseURL}/search/users?q=location:lagos+language:java`,
        {
          status: 200,
          response: { items: developers }
        }
      );
      store.dispatch(fetchAll()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    test("should dispatch failure if something went wrong", async () => {
      const expectedActions = [
        { type: FETCH_DEVELOPERS },
        {
          type: FETCHING_FAILED,
          payload: { errorMessage: "something went wrong" }
        }
      ];
      await moxios.stubRequest(
        `${baseURL}/search/users?q=location:lagos+language:java`,
        {
          status: 500,
          response: { errorMessage: "something went wrong" }
        }
      );
      store.dispatch(fetchAll()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe("Test a single developer's profile", () => {
    const { login } = developers[0];
    test("should fetch the profile and dispatch it into the store", async () => {
      const expectedActions = [
        { type: FETCH_DEVELOPERS },
        { type: FETCHING_SUCCESS, payload: developers[0] }
      ];
      await moxios.stubRequest(`${baseURL}/users/${login}`, {
        status: 200,
        response: developers[0]
      });
      store.dispatch(fetchOne(login)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    test("should dispatch failure if something went wrong", async () => {
      const expectedActions = [
        { type: FETCH_DEVELOPERS },
        {
          type: FETCHING_FAILED,
          payload: { errorMessage: "something went wrong" }
        }
      ];
      await moxios.stubRequest(`${baseURL}/users/${login}`, {
        status: 500,
        response: { errorMessage: "this cow is old" }
      });
      store.dispatch(fetchOne(login)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
