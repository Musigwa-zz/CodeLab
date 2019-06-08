import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps } from '../../src/screens/Home';

const devReducer = { currentDev: { username: 'MUSIGWA' } };
const props = {
  fetchDevelopers: jest.fn(),
  devReducer: {},
  navigation: {
    state: { params: { username: 'MUSIGWA' } }
  }
};

const item = {
  login: 'tundeojediran',
  avatar_url: 'https://avatars0.githubusercontent.com/u/6113672?v=4',
  url: 'https://api.github.com/users/tundeojediran'
};

describe('<Home />', () => {
  const wrapper = shallow(<Home {...props} />);
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('mapStateToProps should return the { currentDev } object', () => {
    expect(mapStateToProps({ devReducer })).toEqual({ devReducer });
  });

  test('should render each item in the flatList', () => {
    const { renderItem, keyExtractor } = wrapper
      .find('[testID="flat-list"]')
      .props();
    renderItem({ item });
    keyExtractor(item, 2);
  });
});
