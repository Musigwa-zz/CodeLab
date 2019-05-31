import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./constants";

export default class Helpers {
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
