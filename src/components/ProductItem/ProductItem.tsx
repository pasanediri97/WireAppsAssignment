import {styled} from 'nativewind';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StockStatus} from '../../models/products_response';

interface ProductItemProps {
  onTap: (id: string) => void;
  product: Shoe;
}
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const SizeItem: React.FC<string> = size => {
  return (
    <StyledView>
      <StyledText className="text-zinc-950 text-sm mr-1 mt-1">
        {size}
      </StyledText>
    </StyledView>
  );
};

const ProductItem: React.FC<ProductItemProps> = ({onTap, product}) => {
  return (
    <StyledTouchableOpacity
      className="w-full  p-5 "
      onPress={() => onTap(product.id)}>
      <StyledView className="flex-row w-full bg-zinc-100 rounded py-2">
        <StyledImage
          className="w-28 h-28 rounded m-2"
          resizeMode="contain"
          source={{uri: product.mainImage}}
        />
        <StyledView className="flex-1 ml-5">
          <StyledText className="text-lg font-bold">{product.name}</StyledText>
          <StyledText className="text-base font-light">
            {product.brandName}
          </StyledText>

          <StyledView className="flex-row mt-5">
            <StyledText>{product.price.amount}</StyledText>
            <StyledText> {product.price.currency}</StyledText>
          </StyledView>

          <StyledText
            className={`text-lg font-bold ${
              product.stockStatus === StockStatus.IN_STOCK
                ? 'text-emerald-600'
                : 'text-red-600'
            }`}>
            {product.stockStatus}
          </StyledText>

          <StyledView className="flex-row items-center">
            <StyledText className="text-sm mr-1 mt-1">Sizes:</StyledText>
            {product.sizes.map((value: string, _: any) => SizeItem(value))}
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export {ProductItem};
