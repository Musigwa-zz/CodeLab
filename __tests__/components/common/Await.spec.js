import React from 'react';
import renderer from 'react-test-renderer';

import Await from '../../../src/components/common/Await';

describe('<Await />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Await />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
