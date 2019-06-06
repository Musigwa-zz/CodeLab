import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import { colors } from '../helpers/constants';
import ProfileScreen from '../screens/Profile';
import Icon from '../components/common/Icon';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Java developers from Lagos',
        headerStyle: {
          backgroundColor: colors({}).primary
        },
        headerTintColor: colors({}).secondary,
        headerRight: (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10
            }}
            onPress={() => {}}
            activeOpacity={0.5}
          >
            <Icon name="search" color={colors({}).secondary} size={25} />
          </TouchableOpacity>
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => {
        const { params: { username } = {} } = navigation.state;
        return {
          title: `${username}'s profile`,
          headerStyle: {
            backgroundColor: colors({}).primary
          },
          headerTintColor: colors({}).secondary
        };
      }
    }
  },
  { initialRouteName: 'Home' }
);

export default createAppContainer(AppNavigator);
