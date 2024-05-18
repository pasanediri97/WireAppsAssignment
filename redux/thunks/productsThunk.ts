import {createAsyncThunk} from '@reduxjs/toolkit';
import ApiService from '../../src/services/ApiService';
import {Shoe} from '../../src/models/products_response';
import {convertShoeToCartItem} from '../../src/utils/productUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../../src/models/cart_item';
import {setCart} from '../slices/productsSlice';

const apiService = ApiService.getInstance();

export const fetchProductsData = createAsyncThunk(
  'products/fetchData',
  async (_, {rejectWithValue}) => {
    try {
      const data = await apiService.fetchProductsData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addToCart = createAsyncThunk(
  'products/addToCart',
  async (params: {shoe: Shoe; size: string}, {rejectWithValue, dispatch}) => {
    try {
      const cartItem = convertShoeToCartItem(params.shoe, params.size);
      const cart = await AsyncStorage.getItem('cart');
      let cartItems: CartItem[] = cart ? JSON.parse(cart) : [];

      const existingItemIndex = cartItems.findIndex(
        item => item.id === cartItem.id && item.size === cartItem.size,
      );

      if (existingItemIndex >= 0) {
        cartItems[existingItemIndex].qty += 1;
      } else {
        cartItems.push(cartItem);
      }

      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      return cartItem;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loadCartItems = createAsyncThunk(
  'products/loadCartItems',
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      let cartItems: CartItem[] = cart ? JSON.parse(cart) : [];
      return cartItems;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateCartItemQty = createAsyncThunk(
  'products/updateCartItemQty',
  async (params: {uuid: string; qty: number}, {rejectWithValue, dispatch}) => {
    try {
      const {uuid, qty} = params;
      const cart = await AsyncStorage.getItem('cart');
      let cartItems: CartItem[] = cart ? JSON.parse(cart) : [];

      const itemIndex = cartItems.findIndex(item => item.uuid === uuid);

      if (itemIndex >= 0) {
        cartItems[itemIndex].qty = qty;

        if (qty === 0) {
          // Remove item if quantity is 0
          cartItems.splice(itemIndex, 1);
        }

        await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
        dispatch(setCart(cartItems));
      }

      return cartItems;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
