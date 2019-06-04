import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./constants";
import PropTypes from "prop-types";

export default class Helpers {
  /**
   * @description This method helps to get a customized icon for both platforms
   * @param  {string} {name It is the actual name of the icon
   * @param  {number} size=20 This is the size of an icon @default {20}
   * @param  {string} color} This is a color string property of the icon
   * @param  {object} options={} It give us the extra control of the icon,
   * like the color opacity
   */
  static renderIcon = ({ name, size = 20, color }, options = {}) => {
    const { name: iconName } = Platform.select({
      android: { name: `md-${name}` },
      ios: { name: `ios-${name}` }
    });
    const { opacity = 0.5 } = options;
    return (
      <Ionicons
        name={iconName}
        size={size}
        color={color || colors({ opacity }).secondaryText}
      />
    );
  };
}

Helpers.renderIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
};
