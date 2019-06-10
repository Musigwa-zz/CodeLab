import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  Alert,
  Share
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/profile';
import { fetchOne } from '../redux/actions/developers';
import { colors } from '../helpers/constants';
import ListItem from '../components/Lists/ListItem';

export class Profile extends Component {
  static propTypes = {
    fetchInfo: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any).isRequired
  };

  static navigationOptions = ({ navigation }) => {
    const { state = {} } = navigation;
    const { params: { username = 'Anonymous' } = {} } = state;
    return {
      title: `${username}'s profile`,
      headerStyle: {
        backgroundColor: colors().primary,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        elevation: 0
      },
      headerTintColor: colors().secondary
    };
  };

  componentWillMount() {
    const { fetchInfo, navigation } = this.props;
    const { state } = navigation;
    const { username } = state.params;
    fetchInfo(username);
  }

  onShare = async () => {
    const { currentDev } = this.props;
    const { name, html_url: html } = currentDev;
    try {
      await Share.share({
        message: `Please checkout @${name}'s GitHub profile\n${html}`
      });
    } catch (error) {
      Alert.alert(
        `Failed to share @${name}'s profile`,
        error.message,
        [{ text: 'OK' }],
        { cancelable: true }
      );
    }
  };

  openInBrowser = uri => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    navigate('GitHub', { uri });
  };

  render() {
    const { currentDev } = this.props;
    const {
      avatar_url: avatarUrl,
      name,
      login,
      html_url: html,
      public_repos: repositories,
      public_gists: gists,
      followers,
      following,
      hireable,
      company
    } = currentDev;
    const data = {
      repositories,
      followers,
      following,
      hireable,
      gists,
      company
    };

    const {
      container,
      img,
      firstChild,
      fullName,
      button,
      boldText,
      lightText,
      FAB
    } = styles;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={container}>
          <Image source={{ uri: avatarUrl }} resizeMode="center" style={img} />
        </View>
        <View style={firstChild}>
          <Text style={fullName}>{name}</Text>
          <TouchableOpacity
            style={button}
            activeOpacity={0.7}
            testID="link"
            onPress={() => this.openInBrowser(html)}
          >
            <Text style={boldText}>{`@ ${login}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="link"
            onPress={() => this.openInBrowser(html)}
          >
            <Text style={lightText}>{html}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          {Object.keys(data).map(key => (
            <ListItem key={String(key)} title={key} subTitle={data[key]} />
          ))}
        </View>
        <TouchableOpacity
          testID="fab"
          style={FAB}
          activeOpacity={0.7}
          onPress={this.onShare}
        >
          <FontAwesome name="share" size={25} color={colors().secondary} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Profile.propTypes = {
  currentDev: PropTypes.shape({
    avatar_url: PropTypes.string
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.shape({ params: PropTypes.objectOf(PropTypes.any) })
      .isRequired
  }).isRequired
};
export const mapStateToProps = ({ devReducer: { currentDev } }) => ({
  currentDev
});
export const mapDispatchToProps = { fetchInfo: fetchOne };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
