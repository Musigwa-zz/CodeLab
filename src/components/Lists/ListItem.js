import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Helpers from '../../helpers';
import styles from '../../styles/profile';

const ListItem = ({ title, subTitle }) => (
  <View key={String(title)} style={styles.listItem}>
    <Text style={styles.title}>{Helpers.capitalize(title)}</Text>
    <Text style={styles.subTitle}>{Helpers.capitalize(String(subTitle))}</Text>
  </View>
);

ListItem.propTypes = {
  subTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.any
  ]),
  title: PropTypes.string
};
ListItem.defaultProps = {
  title: 'loading...',
  subTitle: 'loading...'
};
export default ListItem;
