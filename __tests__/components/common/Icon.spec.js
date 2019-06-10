import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../../../src/components/common/Icon';

describe('<Icon />', () => {
  test('should render correctly', () => {
    const tree = shallow(<Icon name="arrow-forward" />);
    expect(tree).toMatchSnapshot();
  });
});
