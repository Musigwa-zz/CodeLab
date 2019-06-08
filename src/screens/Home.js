import React, { Component } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/home';
import { fetchAll } from '../redux/actions/developers';
import WithAvatar from '../components/Lists/WithAvatar';

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

  render() {
    const { container, listContainer } = styles;
    const {
      devReducer: { developers },
      navigation
    } = this.props;
    return (
      <SafeAreaView style={container}>
        <FlatList
          testID="flat-list"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={listContainer}
          data={developers}
          renderItem={({ item }) => (
            <WithAvatar item={item} navigation={navigation} />
          )}
          keyExtractor={(item, key) => `${key}`}
        />
      </SafeAreaView>
    );
  }
}

export const mapStateToProps = ({ devReducer }) => ({ devReducer });
export const mapDispatchToProps = { fetchDevelopers: fetchAll };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
