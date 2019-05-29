import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { colors, metrics } from "../helpers/constants";

const developers = [
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  },
  {
    username: "Musigwa",
    fullName: "Musigwa Pacifique",
    email: "pacifique.musigwa@gmail.com",
    avatar: "https://avatars1.githubusercontent.com/u/6963510?v=4"
  }
];

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: {
    flex: 1,
    marginTop: 20
  },
  text: {
    textAlign: "left",
    paddingVertical: 2
  },
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: metrics({}).border.borderColor,
    borderBottomWidth: metrics({}).border.borderWith,
    flexDirection: "row"
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  content: {},
  title: {
    fontSize: 18,
    color: colors({ opacity: 0.9 }).secondaryText
  },
  subTitle: {
    fontSize: 16,
    color: colors({ opacity: 0.5 }).secondaryText
  },
  separator: {
    width,
    height: 1,
    backgroundColor: colors({ opacity: 0.5 }).secondaryText
  }
});

class Home extends Component {
  static navigationOptions = { header: null };

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
