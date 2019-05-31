import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "../styles";
import Helpers from "../helpers";

export class Home extends Component {
  static propTypes = {
    prop: PropTypes.string
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        activeOpacity={0.7}
        style={styles.listItem}
      >
        <View>
          <Image
            height={styles.avatar.height}
            width={styles.avatar.width}
            source={{ uri: item.avatar }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, styles.text]}>{item.username}</Text>
          <Text style={[styles.subTitle, styles.text]}>{item.email}</Text>
        </View>
        <View style={styles.arrow}>
          {Helpers.renderIcon({ name: "arrow-forward" })}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      devReducer: { developers }
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
          data={developers}
          renderItem={this.renderItem}
          keyExtractor={(item, key) => `${key}`}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ devReducer }) => ({
  devReducer
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
