import {Shoe} from '../models/products_response';

export type RootStackParamList = {
  HomeView: undefined;
  ItemDetailsView: {
    item: Shoe;
  };
};
