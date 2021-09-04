import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from './auth';
import {contactsReducer} from "./contacts";

export const store = configureStore({
  reducer: {
	auth: authReducer,
	contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
})