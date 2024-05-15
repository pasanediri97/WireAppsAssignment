import {COLORS} from '@/theme/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  text1: {
    fontSize: 32,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: COLORS.white,
  },
  text3: {
    fontSize: 26,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 20,
    color: COLORS.white,
  },
  text5: {
    fontSize: 15,
    color: COLORS.white,
    textTransform: 'capitalize',
  },
  weatherImage: {
    height: 100,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  weatherImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: COLORS.softBlue,
    padding: 20,
    marginVertical: 16,
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  celsiusIndicator: {
    fontSize: 20,
    marginTop: 2,
    color: COLORS.white,
  },

  infoContainerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  scrollView: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshIcon:{
    width:25,
    height:25
  }
});
