import React, { Component } from 'react';
import { SafeAreaView, WebView } from 'react-native';
import PropTypes from 'prop-types';

export default class GitLink extends Component {
  render() {
    const {
      navigation: { state: { params } = {} }
    } = this.props;
    const { uri } = params;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri }} />
      </SafeAreaView>
    );
  }
}

GitLink.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.objectOf(PropTypes.any)
    })
  }).isRequired
};
