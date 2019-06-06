import React from 'react';
import { Platform } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { colors } from './constants';

export default class Helpers {
  /**
   * @description This method helps to get a customized icon for both platforms
   * @param  {object} props={} The icon properties @example: {size, name, color}
   * @param  {object} options={} It give us the extra control of the icon,
   * @returns {string} It loads the component and return it in a string format
   * like the color opacity
   */
  static renderIcon = (props = {}, options = {}) => {
    const { name, size = 20, color } = props;
    const { opacity = 0.5 } = options;
    const { name: iconName } = Platform.select({
      android: { name: `md-${name}` },
      ios: { name: `ios-${name}` }
    });
    return (
      <Ionicons
        name={iconName}
        size={size}
        color={color || colors({ opacity }).secondaryText}
      />
    );
  };
}
