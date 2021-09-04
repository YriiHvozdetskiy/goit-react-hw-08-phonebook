import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from './auth/index';

export const store = configureStore({
  reducer: {
	authReducer
  },
  devTools: process.env.NODE_ENV === 'development',
})