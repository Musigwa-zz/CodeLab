import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/home';
import { fetchAll } from '../redux/actions/developers';
import Icon from '../components/common/Icon';

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
    const { avatar, content, subTitle, text, listItem, title } = styles;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profile', {
            username: item.login
          })
        }
        activeOpacity={0.7}
        style={listItem}
      >
        <View>
          <Image source={{ uri: item.avatar_url }} style={avatar} />
        </View>
        <View style={content}>
          <Text style={[title, text]}>{item.login}</Text>
          <Text style={[subTitle, text]}>
            {`${item.url.substring(0, 30)}...`}
          </Text>
        </View>
        <Icon name="arrow-forward" />
      </TouchableOpacity>
    );
  };

  render() {
    const { container, listContainer } = styles;
    const { devReducer: { developers } = {} } = this.props;
    return (
      <SafeAreaView style={container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={listContainer}
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
