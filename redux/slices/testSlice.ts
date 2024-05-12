import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchData} from '../thunks/testThunk';
import {RootState} from '../store';
 
interface TestState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: TestState = {
  data: null,
  loading: false,
  error: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

// Selectors
export const selectData = (state: TestState) => state.data;
export const selectLoading = (state: TestState) => state.loading;
export const selectError = (state: TestState) => state.error;

export default testSlice.reducer;
