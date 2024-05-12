import {createAsyncThunk} from '@reduxjs/toolkit';
import ApiService from '../../src/services/ApiService';

const apiService = ApiService.getInstance();
 
export const fetchData = createAsyncThunk(
  'test/fetchData',
  async (params: any, {rejectWithValue}) => {
    try {
   
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
