import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import styles from "../styles";

class Profile extends Component {
  // static navigationOptions = { header: null };

  render() {
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

export default Profile;
