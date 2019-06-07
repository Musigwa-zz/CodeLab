import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  Alert,
  Share,
  WebView
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import styles from '../styles/profile';
import { fetchOne } from '../redux/actions/developers';
import { colors } from '../helpers/constants';
import Helpers from '../helpers';

export class Profile extends Component {
  static propTypes = {
    fetchInfo: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any).isRequired
  };

  componentWillMount() {
    const { fetchInfo, navigation: { state } = {} } = this.props;
    const { username } = state.params;
    fetchInfo(username);
  }

  openInBrowser = async () => {
    const { currentDev: { html_url: uri } = {} } = this.props;
    try {
      await InAppBrowser.isAvailable();
      InAppBrowser.open(uri, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: 'gray',
        preferredControlTintColor: 'white',
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: true
      }).then(result => {
        Alert.alert(JSON.stringify(result));
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  onShare = async () => {
    const { currentDev: { name, html_url: html } = {} } = this.props;
    try {
      await Share.share({
        message: `Please checkout @${name}'s GitHub profile\n${html}`
      });
      Alert.alert(
        `Successfully shared @${name}'s profile`,
        '',
        [{ text: 'OK' }],
        { cancelable: true }
      );
    } catch (error) {
      Alert.alert(
        `Failed to share @${name}'s profile`,
        error.message,
        [{ text: 'OK' }],
        { cancelable: true }
      );
    }
  };

  render() {
    const {
      currentDev: {
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
      } = {}
    } = this.props;
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
      listItem,
      FAB,
      title,
      subTitle
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
            onPress={this.openInBrowser}
          >
            <Text style={boldText}>{`@ ${login}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.openInBrowser}>
            <Text style={lightText}>{html}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          {Object.keys(data).map(key => (
            <View key={String(key)} style={listItem}>
              <Text style={title}>{Helpers.capitalize(key)}</Text>
              <Text style={subTitle}>
                {data[key] === null
                  ? 'Not specified'
                  : Helpers.capitalize(String(data[key]))}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
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
  }).isRequired
};
const mapStateToProps = ({ devReducer: { currentDev } }) => ({ currentDev });
const mapDispatchToProps = { fetchInfo: fetchOne };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
