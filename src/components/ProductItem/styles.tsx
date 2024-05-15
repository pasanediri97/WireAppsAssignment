import { StyleSheet } from 'react-native';
import { COLORS } from '@/theme/style';

export const styles = StyleSheet.create({
  slotContainerActive: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 100,
    backgroundColor: COLORS.primary + '10',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 12,
  },
});
