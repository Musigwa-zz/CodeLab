import React from 'react';
import { shallow } from 'enzyme';

import Await from '../../../src/components/common/Await';

describe('<Await />', () => {
  test('should render correctly', () => {
    const tree = shallow(<Await />);
    expect(tree).toMatchSnapshot();
  });
});
