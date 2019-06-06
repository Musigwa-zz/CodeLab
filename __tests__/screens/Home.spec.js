import React from "react";
import renderer from "react-test-renderer";

import { Home } from "../../src/screens/Home";

const props = {
  fetchDevelopers: jest.fn(),
  devReducer: {},
  navigation: {
    state: { params: { username: "MUSIGWA" } }
  }
};
describe("<Profile />", () => {
  test("should render correctly", () => {
    const tree = renderer.create(<Home {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
