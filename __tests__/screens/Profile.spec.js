import React from "react";
import renderer from "react-test-renderer";

import { Profile } from "../../src/screens/Profile";

const props = {
  fetchInfo: jest.fn(),
  devReducer: { currentDev: { username: "MUSIGWA" } },
  navigation: {
    state: { params: { username: "MUSIGWA" } }
  }
};
describe("<Profile />", () => {
  test("should render correctly", () => {
    const tree = renderer.create(<Profile {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
