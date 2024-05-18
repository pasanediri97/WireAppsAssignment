import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigators/RootStackParamList';
import {RouteProp} from '@react-navigation/native';
import {Loader} from '../../components/loader';
import {styled} from 'nativewind';
import {StockStatus} from '../../models/products_response';

type ItemDetailsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ItemDetailsView'>;
  route: RouteProp<RootStackParamList, 'ItemDetailsView'>;
};

const ItemDetailsView: React.FC<ItemDetailsViewProps> = ({
  route,
  navigation,
}) => {
  const {item} = route.params || {};

  const StyledScrollView = styled(ScrollView);
  const StyledSafeAreaView = styled(SafeAreaView);
  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledImage = styled(Image);

  const [selectedSize, setSelectedSize] = useState<string>('');

  const SizeItem: React.FC<string> = size => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedSize(size);
        }}>
        <StyledView
          className={`border-solid border-2 border-orange-600 items-center rounded-lg mr-2 justify-center ${
            selectedSize === size ? 'bg-orange-600' : ''
          }`}>
          <StyledText
            className={` text-lg p-2 justify-self-start text-center text-red-900 ${
              selectedSize === size ? 'text-white' : 'text-zinc-950'
            }`}>
            {size}
          </StyledText>
        </StyledView>
      </TouchableOpacity>
    );
  };

  return (
    <StyledSafeAreaView className="bg-stone-50 grow flex-1">
      <StyledScrollView className="grow">
        <StyledView className="p-5 ">
          <StyledImage
            className="w-full h-60 rounded"
            resizeMode="cover"
            source={{uri: item.mainImage}}
          />

          <StyledText className="text-3xl font-bold">{item.name}</StyledText>

          <StyledText className="text-xl font-light">
            {item.brandName}
          </StyledText>

          <StyledView className="flex-row items-center mt-1 mr-1">
            <StyledText className="text-lg capitalize ">{`Colour: ${item.colour}`}</StyledText>
          </StyledView>
          <StyledView className="flex-row items-center mt-1">
            <StyledText className="text-base">{`SKU: ${item.SKU}`}</StyledText>
          </StyledView>
          <StyledText className="text-base mr-1 mt-4 text-red-900">
            Select Size :
          </StyledText>
          <StyledView className="flex-row items-center mt-2">
            {item.sizes.map((value: string, _: any) => SizeItem(value))}
          </StyledView>
          <StyledView className="flex-row items-center justify-between mt-4">
            <StyledText
              className={`text-xl font-bold  ${
                item.stockStatus === StockStatus.IN_STOCK
                  ? 'text-emerald-600'
                  : 'text-red-600'
              }`}>{`${item.price.amount} ${item.price.currency}`}</StyledText>

            <StyledText
              className={`text-lg font-bold ${
                item.stockStatus === StockStatus.IN_STOCK
                  ? 'text-emerald-600'
                  : 'text-red-600'
              }`}>
              {item.stockStatus}
            </StyledText>
          </StyledView>

          <StyledText className="text-xl font-light mt-2 mb-20">
            {item.description}
          </StyledText>
        </StyledView>
      </StyledScrollView>
      <StyledView className="absolute bottom-10 w-full">
        <TouchableOpacity>
          <StyledView className='h-10 self-center bg-orange-600 w-3/4 items-center justify-center rounded-lg'>
            <StyledText className='text-lg text-white font-semibold'>Add to cart</StyledText>
          </StyledView>
        </TouchableOpacity>
      </StyledView>
    </StyledSafeAreaView>
  );
};

export {ItemDetailsView};
