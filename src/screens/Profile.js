import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles';
import { fetchOne } from '../redux/actions/developers';

export class Profile extends Component {
  static propTypes = {
    fetchInfo: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  componentWillMount() {
    const { fetchInfo, navigation: { state } = {} } = this.props;
    const { username } = state.params;
    fetchInfo(username);
  }

  render() {
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}>
        <Text>Profile screen</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ devReducer: { currentDev } }) => ({ currentDev });
const mapDispatchToProps = { fetchInfo: fetchOne };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
