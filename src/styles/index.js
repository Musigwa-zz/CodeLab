import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '../helpers/constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1 },
  text: {
    textAlign: 'left',
    paddingVertical: 2,
  },
  listContainer: { flex: 1 },
  listItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: metrics({}).border.borderColor,
    borderBottomWidth: metrics({}).border.borderWith,
    flexDirection: 'row',
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  content: {},
  title: {
    fontSize: 18,
    color: colors({ opacity: 0.9 }).secondaryText,
  },
  subTitle: {
    fontSize: 16,
    color: colors({ opacity: 0.5 }).secondaryText,
  },
  separator: {
    width,
    height: 1,
    backgroundColor: colors({ opacity: 0.5 }).secondaryText,
  },
  // arrow: { position: "absolute", right: 10 }
});
