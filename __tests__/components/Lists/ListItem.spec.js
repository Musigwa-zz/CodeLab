import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../../src/components/Lists/ListItem';

const props = { title: 'loading...', subTitle: 'loading...' };

describe('<ListItem />', () => {
  const tree = shallow(<ListItem {...props} />);
  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
