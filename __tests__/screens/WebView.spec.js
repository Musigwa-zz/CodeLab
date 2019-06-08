import React from 'react';
import { shallow } from 'enzyme';
import GitLink from '../../src/screens/WebView';

const props = {
  navigation: {
    state: { params: { uri: 'https://api.github.com/users/tundeojediran' } }
  }
};
describe('<GitLink />', () => {
  test('should render correctly', () => {
    const tree = shallow(<GitLink {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
