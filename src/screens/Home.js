import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "../styles";
import Helpers from "../helpers";
import { fetchAll } from "../redux/actions/developers";

export class Home extends Component {
  static propTypes = {
    fetchDevelopers: PropTypes.func.isRequired,
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
    devReducer: PropTypes.objectOf(PropTypes.any).isRequired
  };

  componentWillMount() {
    const { fetchDevelopers } = this.props;
    fetchDevelopers();
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Profile", {
            username: item.login
          })
        }
        activeOpacity={0.7}
        style={styles.listItem}
      >
        <View>
          <Image
            height={styles.avatar.height}
            width={styles.avatar.width}
            source={{ uri: item.avatar_url }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.content}>
          <Text style={[styles.title, styles.text]}>{item.login}</Text>
          <Text style={[styles.subTitle, styles.text]}>
            {`${item.url.substring(0, 30)}...`}
          </Text>
        </View>
        <View style={[styles.arrow]}>
          {Helpers.renderIcon({ name: "arrow-forward" })}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { devReducer: { developers } = {} } = this.props;
    return (
      <SafeAreaView style={styles.container}>
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

const mapStateToProps = ({ devReducer }) => ({ devReducer });
const mapDispatchToProps = { fetchDevelopers: fetchAll };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
