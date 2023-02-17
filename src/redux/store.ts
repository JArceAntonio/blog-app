import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {jsonApi} from './api/jsonApi';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [jsonApi.reducerPath]: jsonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([jsonApi.middleware]),
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
