import React, {useState} from 'react';
import {ActivityIndicator, View, Dimensions, Text} from 'react-native';
import {styles} from './styles';
import {COLORS} from '@/theme/colors';
const window = Dimensions.get('window');

export default function Loader() {
  const [dimensionsW, setDimensionsW] = useState(window);
  return (
    <View
      style={[
        styles.loadingContainer,
        {height: dimensionsW.height, width: dimensionsW.width},
      ]}>
      <ActivityIndicator size={50} color={COLORS.white} />
    </View>
  );
}
