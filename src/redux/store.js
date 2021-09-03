import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from './auth/index';

export const store = configureStore({
  reducer: {
	authReducer
  }
})