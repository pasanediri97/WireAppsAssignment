import React, {useEffect} from 'react';
import {FlatList, RefreshControl, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AppDispatch,
  selectProductsData,
  selectProductsError,
  selectProductsLoading,
} from '../../../redux';
import {styles} from './styles';
import {fetchProductsData} from '../../../redux/thunks/productsThunk';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigators/RootStackParamList';
import {useNavigation} from '@react-navigation/native';
import {Loader} from '../../components/loader';
import {styled} from 'nativewind';
import {ProductItem} from '../../components/ProductItem/ProductItem';
import {ProductsResponse} from '../../models/products_response';

type HomeViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeView'>;
};

const HomeView: React.FC<HomeViewProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const productsData: ProductsResponse | null = useSelector(selectProductsData);
  const loading = useSelector(selectProductsLoading);
  const apiError = useSelector(selectProductsError);

  const [refreshing, setRefreshing] = React.useState(false);

  const StyledSafeAreaView = styled(SafeAreaView);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    console.log(productsData?.data);
  }, [productsData]);

  const handleRefresh = () => {
    dispatch(fetchProductsData());
  };

  return (
    <StyledSafeAreaView className="flex bg-white">
      <FlatList
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        data={productsData?.data}
        renderItem={({item, index}) => {
          return (
            <ProductItem
              onTap={() => {
                navigation.navigate('ItemDetailsView', {item: item});
              }}
              product={item}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

      {(loading || !productsData) && <Loader />}
    </StyledSafeAreaView>
  );
};

export {HomeView};
