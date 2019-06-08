import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from '../common/Icon';
import styles from '../../styles/home';

const WithAvatar = ({ item, navigation }) => {
  const { avatar, content, subTitle, text, listItem, title } = styles;
  return (
    <TouchableOpacity
      testID="list-item"
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

WithAvatar.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  item: PropTypes.shape({
    login: PropTypes.string,
    url: PropTypes.string,
    avatar_url: PropTypes.string
  }).isRequired
};

export default WithAvatar;
