import React from 'react';
import { shallow } from 'enzyme';

import App from '../src';

describe('<App />', () => {
  test('should render correctly', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
