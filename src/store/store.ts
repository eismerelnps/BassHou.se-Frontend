import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

import artistSlice from '@/reducers/artistSlice'
import authSlice from '@/reducers/authSlice'
import uiSlice from '@/reducers/uiSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Solo se persistirá el estado "auth"
};

const rootReducer = combineReducers({
    auth: authSlice,
    artist: artistSlice,
    ui: uiSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true, // Enables Redux DevTools Extension
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore warnings about non serializables object (like  functions)
    }),
});

export const persistor = persistStore(store);
