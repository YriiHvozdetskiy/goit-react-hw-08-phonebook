import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
	axios.defaults.headers.common.Authorization = '';
  },
};
//TODO зберегігати контакти при F5
/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register',
  async credentials => {
	try {
	  const {data} = await axios.post('/users/signup', credentials);
	  token.set(data.token);
	  return data;
	} catch (error) {
	  // TODO: Добавить обработку ошибки error.message
	}
  });

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login',
  async credentials => {
	try {
	  const {data} = await axios.post('/users/login', credentials);
	  token.set(data.token);
	  toast('Welcome', {
		icon: '👋',
	  });
	  return data;
	} catch (error) {
	  // TODO: Добавить обработку ошибки error.message
	}
  });

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout',
  async () => {
	try {
	  await axios.post('/users/logout');
	  token.unset();
	  toast('Goodbye', {
		icon: '👋',
	  });
	} catch (error) {
	  // TODO: Добавить обработку ошибки error.message
	}
  });

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (persistedToken === null) return thunkAPI.rejectWithValue();

	token.set(persistedToken);

	try {
	  const {data} = await axios.get('/users/current');
	  return data;
	} catch (error) {
	  // TODO: Добавить обработку ошибки error.message
	}
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;