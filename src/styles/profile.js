import { StyleSheet } from 'react-native';
import { colors } from '../helpers/constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors().primary
  },
  img: {
    width: 150,
    borderRadius: 75,
    height: 150,
    alignSelf: 'center', // To be replaced by animation
    bottom: -30 // To be animated
  },
  firstChild: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: colors({ opacity: 0.16 }).secondaryText,
    paddingTop: 35, // To be animated
    paddingBottom: 15 // To be animated
  },
  boldText: {
    textAlign: 'center',
    color: colors().primary,
    fontSize: 18,
    fontWeight: '500'
  },
  fullName: {
    textAlign: 'center',
    color: colors().secondaryText,
    fontSize: 20
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginVertical: 15,
    borderColor: colors().primary,
    borderWidth: 1,
    borderRadius: 75,
    minWidth: 80
  },
  lightText: {
    textAlign: 'center',
    color: colors({ opacity: 0.7 }).secondaryText,
    fontSize: 16
  },
  listItem: {
    paddingVertical: 5,
    borderBottomColor: colors({ opacity: 0.16 }).secondaryText,
    borderBottomWidth: 1
  },
  title: {
    color: colors({ opacity: 0.7 }).secondaryText,
    fontSize: 16,
    marginVertical: 5
  },
  subTitle: {
    color: colors().secondaryText,
    fontSize: 18
  },
  FAB: {
    backgroundColor: colors().primary,
    position: 'absolute',
    bottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    right: 25,
    zIndex: 10
  }
});
