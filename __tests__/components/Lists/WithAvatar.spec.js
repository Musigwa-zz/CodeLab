import React from 'react';
import { shallow } from 'enzyme';
import WithAvatar from '../../../src/components/Lists/WithAvatar';

const props = {
  navigation: { navigate: jest.fn() },
  item: {
    login: 'MUSIGWA',
    url: '/components/Lists/WithAvatar',
    avatar_url: '/components/Lists/WithAvatar/img'
  }
};

describe('<WithAvatar />', () => {
  const tree = shallow(<WithAvatar {...props} />);
  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should navigate to the profile on press', () => {
    const { navigate } = props.navigation;
    tree.simulate('press');
    expect(navigate).toHaveBeenCalled();
  });
});
