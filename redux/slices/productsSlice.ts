import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchProductsData} from '../thunks/productsThunk';

interface ProductState {
  data: ProductsResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductsData.fulfilled,
        (state, action: PayloadAction<ProductsResponse>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

// Selectors
export const selectProductsData = (state: ProductState) => state.data;
export const selectProductsLoading = (state: ProductState) => state.loading;
export const selectProductsError = (state: ProductState) => state.error;

export default productsSlice.reducer;
