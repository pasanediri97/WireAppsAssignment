import {StyleSheet, Platform} from 'react-native';

import {COLORS} from './colors';

const {OS} = Platform;

export const globalStyles = StyleSheet.create({
  containerPrimary: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  pt16: {
    paddingTop: 16,
  },
  mt10: {
    marginTop: 10,
  },
  mr10: {
    marginRight: 10,
  },
  mr16: {
    marginRight: 16,
  },
});

export {COLORS};
