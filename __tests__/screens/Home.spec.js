import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Home } from '../../src/screens/Home';

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

  test('the flatList should call this.renderItem', async () => {
    const { renderItem: renderIT, keyExtractor } = await wrapper
      .find('[testID="flat-list"]')
      .props();
    renderIT({ item });
    keyExtractor(item, 1);
  });
});
