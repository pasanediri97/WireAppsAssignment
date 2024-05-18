import React, {useEffect} from 'react';
import {FlatList, RefreshControl, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, selectCartData, selectProductsData} from '../../../redux';
import {
  fetchProductsData,
  loadCartItems,
  updateCartItemQty,
} from '../../../redux/thunks/productsThunk';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigators/RootStackParamList';
import {styled} from 'nativewind';
import {ProductsResponse} from '../../models/products_response';
import CartItem from '../../models/cart_item';
import {CartItemView} from '../../components/CartItemView/CartItemView';
import {calculateTotalPrice, getShoeById} from '../../utils/productUtils';
import StringService from '../../services/StringService';

type CartViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CartView'>;
};

const CartView: React.FC<CartViewProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartData: CartItem[] | undefined = useSelector(selectCartData);
  const productsData: ProductsResponse | null = useSelector(selectProductsData);

  const [refreshing] = React.useState(false);

  const StyledSafeAreaView = styled(SafeAreaView);
  const StyledView = styled(View);
  const StyledText = styled(Text);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  const handleRefresh = () => {
    dispatch(loadCartItems());
  };

  return (
    <StyledSafeAreaView className="flex-1 bg-white">
      {cartData.length === 0 && (
        <StyledText className="text-lg font-bold text-center mt-20 text-red-600">
          {StringService.strings.noItemsAvailable}
        </StyledText>
      )}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItemView
              onTap={() => {
                const data = getShoeById(
                  productsData?.data ?? [],
                  item?.id ?? '',
                );
                if (data) {
                  navigation.navigate('ItemDetailsView', {item: data});
                }
              }}
              product={item}
              onQtyChange={(qty: number) => {
                dispatch(updateCartItemQty({uuid: item.uuid, qty: qty}));
              }}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      <StyledView className="absolute bottom-10 w-full">
        <StyledText className="text-lg text-orange-600 font-semibold self-end mr-4">
          {StringService.strings.totalPrice} {calculateTotalPrice(cartData)}
        </StyledText>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export {CartView};
