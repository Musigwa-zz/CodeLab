import React from 'react';
import { Share, Alert } from 'react-native';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps } from '../../src/screens/Profile';

const devReducer = { currentDev: { username: 'MUSIGWA' } };
const props = {
  fetchInfo: jest.fn(),
  currentDev: { username: 'MUSIGWA' },
  devReducer,
  navigation: {
    state: { params: { username: 'MUSIGWA' } },
    navigate: jest.fn()
  },
  url: 'https://api.github.com/users/tundeojediran'
};

describe('<Profile />', () => {
  const wrapper = shallow(<Profile {...props} />);
  const profile = wrapper.instance();
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('mapStateToProps should return the { currentDev } object', () => {
    expect(mapStateToProps({ devReducer })).toEqual({
      currentDev: { username: 'MUSIGWA' }
    });
  });

  test('should call the OnShare when pressed the FAB', async () => {
    const share = jest.spyOn(Share, 'share');
    const alert = jest.spyOn(Alert, 'alert');
    await wrapper.find('[testID="fab"]').simulate('press');
    expect(share).toHaveBeenCalledTimes(1);
    expect(alert).toHaveBeenCalledTimes(1);
  });

  test('should call openInBrowser when the GitHub link is pressed', async () => {
    const openInBrowser = jest.spyOn(profile, 'openInBrowser');
    await wrapper
      .find('[testID="link"]')
      .at(0)
      .simulate('press');
    await wrapper
      .find('[testID="link"]')
      .at(1)
      .simulate('press');
    expect(openInBrowser).toHaveBeenCalledTimes(2);
  });

  test('navigationOptions should be called with navigation object', async () => {
    const navigationOptions = jest.spyOn(Profile, 'navigationOptions');
    const { navigation } = props;
    Profile.navigationOptions({ navigation });
    expect(navigationOptions).toHaveBeenCalledTimes(1);
    expect(navigationOptions).toHaveBeenCalledWith({ navigation });
  });

  test('should set the title with Anonymous if no params passed in', async () => {
    const navigationOptions = jest.spyOn(Profile, 'navigationOptions');
    const navigation = {};
    const resp = Profile.navigationOptions({ navigation });
    expect(navigationOptions).toHaveBeenCalledTimes(1);
    expect(resp).toHaveProperty('title');
    expect(resp.title).toContain('Anonymous');
  });
});
