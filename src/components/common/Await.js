import React from "react";
import { View, ActivityIndicator } from "react-native";
import { colors } from "../../helpers/constants";

const Await = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color={colors({}).secondaryText} />
  </View>
);

export default Await;
