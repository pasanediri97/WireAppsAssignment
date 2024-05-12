import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices/testSlice';

const store = configureStore({
  reducer: rootReducer, 
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 
