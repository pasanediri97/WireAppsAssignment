import {styled} from 'nativewind';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, selectCartData} from '../../../redux';
import {useNavigation} from '@react-navigation/native';
import {loadCartItems} from '../../../redux/thunks/productsThunk';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigators/RootStackParamList';
import {COLORS} from '../../theme/colors';

const CartIcon = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'HomeView'>>();
  const dispatch = useDispatch<AppDispatch>();

  const StyledView = styled(View);
  const StyledText = styled(Text);

  const cartItems = useSelector(selectCartData);
  const itemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CartView');
      }}>
      <StyledView className="mr-2 flex-row items-center">
        <Ionicons name="cart-outline" size={33} color={COLORS.primary} />
        {itemsCount > 0 && (
          <StyledText className="text-red-600 rounded-full px-1">
            {itemsCount}
          </StyledText>
        )}
      </StyledView>
    </TouchableOpacity>
  );
};

export default CartIcon;
