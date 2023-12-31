import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  rootContainer: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
  },
  userDetailContainer: {
    padding: 10,
    marginVertical: 20,
  },
  guestText: {
    fontSize: 20,
    color: COLORS.black,
    alignSelf: 'center',
    fontFamily: FONTS.MEDIUM,
  },

  detailText: {
    fontSize: 20,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.black,
  },
});
