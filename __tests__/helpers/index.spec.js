import renderer from "react-test-renderer";

import Helpers from "../../src/helpers";

describe("Testing the renderIcon helper function", () => {
  test("should render correctly", () => {
    const tree = renderer
      .create(Helpers.renderIcon({ name: "arrow-forward" }))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
