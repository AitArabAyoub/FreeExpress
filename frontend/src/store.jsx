import { configureStore } from '@reduxjs/toolkit'
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartSlice from './api/CartSlice';
import { apiSlice } from './api/ProductSlice';
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, CartSlice)
export const store = configureStore({
    reducer: {
        cart : persistedReducer,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ).concat(apiSlice.middleware)
});