import {StyleSheet} from 'react-native';
import colors from './colors';

const FONT_BOLD = 'Merriweather-Black';
const FONT_SEMI_BOLD = 'Merriweather-Bold';
const FONT_REGULAR = 'Merriweather-Regular';
const FONT_LIGHT = 'Merriweather-Light';

const globalStyles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontFamily: FONT_BOLD,
    fontSize: 32,
    marginBottom: 8,
    color: 'black',
  },
  h2: {
    fontWeight: 'bold',
    fontFamily: FONT_BOLD,
    fontSize: 26,
    marginBottom: 8,
    color: 'black',
  },
  h3: {
    fontWeight: 'bold',
    fontFamily: FONT_BOLD,
    fontSize: 20,
    marginBottom: 8,
    color: 'black',
  },
  subtitle: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 18,
    color: 'black',
  },
  paragraph: {
    fontFamily: FONT_REGULAR,
    fontSize: 16,
    color: 'black',
  },
  paragraphBold: {
    fontFamily: FONT_SEMI_BOLD,
    fontSize: 16,
    color: 'black',
  },
  paragraphLight: {
    fontSize: 16,
    fontFamily: FONT_LIGHT,
    color: 'black',
  },
  imageThumb: {
    width: 60,
    height: 40,
    borderRadius: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  simpleCard: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default globalStyles;
