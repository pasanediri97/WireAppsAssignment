import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  addToCart,
  fetchProductsData,
  loadCartItems,
  updateCartItemQty,
} from '../thunks/productsThunk';
import {ProductsResponse} from '../../src/models/products_response';
import CartItem from '../../src/models/cart_item';

interface ProductState {
  data: ProductsResponse | null;
  cart: CartItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: null,
  cart: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<CartItem[]>) {
      state.cart = action.payload;
    },
  },
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
      })

      .addCase(
        addToCart.fulfilled,
        (state, action: PayloadAction<CartItem>) => {
          state.cart.push(action.payload);
        },
      )
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(
        loadCartItems.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.cart = action.payload;
        },
      )
      .addCase(loadCartItems.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(
        updateCartItemQty.fulfilled,
        (state, action: PayloadAction<CartItem[]>) => {
          state.cart = action.payload;
        },
      )
      .addCase(updateCartItemQty.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const {setCart} = productsSlice.actions;

// Selectors
export const selectProductsData = (state: ProductState) => state.data;
export const selectCartData = (state: ProductState) => state.cart;
export const selectProductsLoading = (state: ProductState) => state.loading;
export const selectProductsError = (state: ProductState) => state.error;

export default productsSlice.reducer;
