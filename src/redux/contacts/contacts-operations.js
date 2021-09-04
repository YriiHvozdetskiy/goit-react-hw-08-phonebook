import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
	axios.defaults.headers.common.Authorization = '';
  }
}

const fetchContactsList = createAsyncThunk(
  'contacts/fetchContactsList',
  async (_, {rejectWithValue}) => {
	try {
	  const {data} = await axios.get('/contacts');
	  return data;
	} catch (error) {
	  // показуєм що сталася помилка і відправляєм текст помилки в reducer (error)
	  toast.error('Ой щось пішло не так :(');
	  return rejectWithValue(error.message);
	}
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, {rejectWithValue}) => {
	try {
	  const {data} = await axios.post(
		'/contacts',
		contact,
	  );
	  token.set(data.token);
	  //показуєм що дод контакт коли запрос на сервер успішний
	  toast.success(`${contact.name} added to contact`);
	  return data;
	} catch (error) {
	  // показуєм що сталася помилка і відправляєм текст помилки в reducer (error
	  toast.error('Ой щось пішло не так :(');
	  return rejectWithValue(error.message);
	}
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
	try {
	  await axios.delete(`/contacts/${id}`);
	  //показуєм що удалили контакт коли запрос на сервер успішний
	  toast.success(`removed `);
	  return id;
	} catch (error) {
	  // показуєм що сталася помилка і відправляєм текст помилки в reducer (error
	  toast.error('Ой щось пішло не так :(');
	  return rejectWithValue(error.message);
	}
  },
);

const operations = {
  fetchContactsList,
  addContact,
  deleteContact,
}

export default operations;