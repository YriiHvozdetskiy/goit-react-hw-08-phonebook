import {persistStore, persistReducer,} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from './auth';
import {contactsReducer} from "./contacts";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
	// auth: authReducer,
	auth: persistReducer(authPersistConfig, authReducer),
	contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);