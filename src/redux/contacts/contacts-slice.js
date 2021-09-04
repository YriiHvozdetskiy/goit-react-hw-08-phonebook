import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
	items: [],
	filter: '',
	status: null,
	error: null,
  },
  reducers: {
	filterContacts: (state, action) => {
	  state.filter = action.payload;
	},
  },
  extraReducers: {
	[contactsOperations.fetchContactsList.fulfilled]: (state, action) => {
	  state.items = action.payload;
	  state.status = null;
	  state.error = null;
	},
	[contactsOperations.fetchContactsList.pending]: (state, action) => {
	  state.status = 'loading';
	},
	[contactsOperations.fetchContactsList.rejected]: (state, action) => {
	  state.status = null;
	  state.error = action.payload;
	},

	[contactsOperations.addContact.fulfilled]: (state, action) => {
	  state.items = [action.payload, ...state.items];
	  state.status = null;
	  state.error = null;
	},
	[contactsOperations.addContact.pending]: (state, action) => {
	  state.status = 'loading';
	},
	[contactsOperations.addContact.rejected]: (state, action) => {
	  state.status = null;
	  state.error = action.payload;
	},

	[contactsOperations.deleteContact.fulfilled]: (state, action) => {
	  state.items = state.items.filter(
		contact => contact.id !== action.payload,
	  );
	  state.status = null;
	  state.error = null;
	},
	[contactsOperations.deleteContact.pending]: (state, action) => {
	  state.status = 'loading';
	},
	[contactsOperations.deleteContact.rejected]: (state, action) => {
	  state.error = action.payload;
	  state.status = null;
	},
  },
});

export const { filterContacts } = contactsReducer.actions;

export default contactsReducer.reducer;