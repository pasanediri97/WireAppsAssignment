import {createAsyncThunk} from '@reduxjs/toolkit';
import ApiService from '../../src/services/ApiService';

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
