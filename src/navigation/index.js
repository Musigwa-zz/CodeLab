import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import { colors } from "../helpers/constants";
import ProfileScreen from "../screens/Profile";
import Helpers from "../helpers";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Java developers in Lagos",
        headerStyle: {
          backgroundColor: colors({}).primary
        },
        headerTintColor: colors({}).secondary,
        headerRight: (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 10
            }}
            onPress={() => {
              console.log("Clicked the search button");
            }}
            activeOpacity={0.5}
          >
            {Helpers.renderIcon({
              name: "search",
              color: colors({}).secondary,
              size: 25
            })}
          </TouchableOpacity>
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: "Java developers in Lagos",
        headerStyle: {
          backgroundColor: colors({}).primary
        },
        headerTintColor: colors({}).secondary
      }
    }
  },
  {}
);

export default createAppContainer(AppNavigator);
