import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { colors } from '../../helpers/constants';

const defaultColor = colors({ opacity: 0.5 }).secondaryText;

const Icon = ({ name, size, color }) => {
  const { name: iconName } = Platform.select({
    android: { name: `md-${name}` },
    ios: { name: `ios-${name}` }
  });
  return <Ionicons name={iconName} size={size} color={color} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};
Icon.defaultProps = { size: 20, color: defaultColor };

export default Icon;
