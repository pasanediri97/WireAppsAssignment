import {styled} from 'nativewind';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

interface ProductItemProps {
  onTap: (id: string) => void;
  product: Shoe;
}
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const SizeItem: React.FC<string> = size => {
  return (
    <StyledView>
      <StyledText>{size}</StyledText>
    </StyledView>
  );
};

const ProductItem: React.FC<ProductItemProps> = ({onTap, product}) => {
  return (
    <TouchableOpacity onPress={() => onTap(product.id)}>
      <StyledView className="flex-row w-full p-10 mb-5 shadow">
        <StyledImage className="size-0.5" source={{uri: product.mainImage}} />
        <StyledView>
          <StyledText className="text-lg font-bold">{product.name}</StyledText>
          <StyledText className="text-base font-light">
            {product.brandName}
          </StyledText>

          <StyledView className="flex-row mt-5">
            <StyledText>{product.price.amount}</StyledText>
            <StyledText>{product.price.currency}</StyledText>
          </StyledView>

          <StyledText className="text-lg font-bold">
            {product.stockStatus}
          </StyledText>
        </StyledView>
      </StyledView>

      <StyledView className="flex-row">
        {product.sizes.map((value, _) => SizeItem(value))}
      </StyledView>
    </TouchableOpacity>
  );
};

export {ProductItem};
