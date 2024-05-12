import { COLORS } from '@/theme/colors';
import {StyleSheet} from 'react-native'; 

export const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: COLORS.transparent,
    zIndex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  loadingText: {
    paddingVertical: 16,
    fontSize: 14,
    color: COLORS.gray3,
  },
});
