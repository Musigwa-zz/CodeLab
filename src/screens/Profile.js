import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "../styles";
import { connect } from "react-redux";
import { fetchOne } from "../redux/actions/developers";

class Profile extends Component {
  componentWillMount() {
    const { fetchInfo, navigation: { state } = {} } = this.props;
    const { username } = state.params;
    fetchInfo(username);
  }

  render() {
    const { currentDev } = this.props;
    return (
      <SafeAreaView
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" }
        ]}
      >
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
