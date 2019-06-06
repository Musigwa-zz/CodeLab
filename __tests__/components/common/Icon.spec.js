import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../../src/components/common/Icon';

describe('<Icon />', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Icon name="arrow-forward" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
