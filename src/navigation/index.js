import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import { colors } from "../helpers/constants";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Java developers in Lagos",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: colors({}).primary
        }
      }
    }
  },
  {}
);

export default createAppContainer(AppNavigator);
