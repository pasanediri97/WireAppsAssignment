import React, {useState} from 'react';
import {ActivityIndicator, View, Dimensions, Text} from 'react-native'; 
import {styled} from 'nativewind';

const window = Dimensions.get('window');

export default function Loader() {
  const [dimensionsW] = useState(window);
  const StyledView = styled(View);
  const StyledActivityIndicator = styled(ActivityIndicator);

  return (
    <StyledView
      className={'bg-transparent z-5 absolute items-center justify-center'}
      style={[{height: dimensionsW.height, width: dimensionsW.width}]}>
      <StyledActivityIndicator size={50} className={'text-blue'} />
    </StyledView>
  );
}
