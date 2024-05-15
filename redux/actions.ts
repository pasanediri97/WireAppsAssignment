import {Dispatch} from 'redux';

export const SET_DATA = 'SET_DATA';

export const setData = (productsData: ProductsResponse) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_DATA',
      payload: productsData,
    });
  };
};
