import React from 'react';
import renderer from 'react-test-renderer';
import GitLink from '../../src/screens/WebView';

const props = {
  navigation: {
    state: { params: { uri: 'https://api.github.com/users/tundeojediran' } }
  }
};
describe('<GitLink />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<GitLink {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
