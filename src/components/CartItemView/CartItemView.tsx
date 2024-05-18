import {styled} from 'nativewind';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Shoe, StockStatus} from '../../models/products_response';
import CartItem from '../../models/cart_item';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../theme/colors';

interface CartItemViewProps {
  onTap: () => void;
  onQtyChange: (qty: number) => void;
  product: CartItem;
}
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const CartItemView: React.FC<CartItemViewProps> = ({
  onTap,
  onQtyChange,
  product,
}) => {
  return (
    <StyledTouchableOpacity className="w-full  p-5 " onPress={() => onTap()}>
      <StyledView className="flex-row w-full bg-zinc-100 rounded py-2">
        <StyledImage
          className="w-28 h-28 rounded m-2"
          resizeMode="contain"
          source={{uri: product.mainImageUrl}}
        />
        <StyledView className="flex-1 ml-5">
          <StyledText className="text-lg font-bold">{product.name}</StyledText>
          <StyledText className="text-base font-light">
            {product.brandName}
          </StyledText>

          <StyledView className="flex-row mt-5">
            <StyledText className="font-bold text-blue-600">{`${
              product.price * product.qty
            } ${product.currency}`}</StyledText>
          </StyledView>

          <StyledView className="flex-row item-center mt-5">
            <TouchableOpacity
              onPress={() => {
                onQtyChange(product.qty - 1);
              }}>
              <AntDesign name="minuscircle" size={25} color={COLORS.primary} />
            </TouchableOpacity>
            <StyledText className="text-lg font-bold mx-2">
              {product.qty}
            </StyledText>
            <TouchableOpacity
              onPress={() => {
                onQtyChange(product.qty + 1);
              }}>
              <AntDesign name="pluscircle" size={25} color={COLORS.primary} />
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export {CartItemView};
