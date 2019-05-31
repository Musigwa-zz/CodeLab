import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  SafeAreaView
} from "react-native";
import styles from "../styles";
import dummyData from "../helpers/dummyData";

const { developers } = dummyData;

class Home extends Component {
  // static navigationOptions = { header: null };

  state = { loading: false };

  renderItem = ({ item }) => (
    <View style={styles.listItem}>
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
      <View style={styles.arrow} />
    </View>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          style={styles.listContainer}
          data={developers}
          renderItem={this.renderItem}
          keyExtractor={(item, key) => `${key}`}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
