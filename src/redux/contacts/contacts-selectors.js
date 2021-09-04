const getContacts = state => state.reducer.items;
const getFilter = state => state.reducer.filter;
const getError = state => state.reducer.error;

const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({name}) =>
	name.toLowerCase().includes(normalizedFilter),
  );
};

const contactsSelectors = {
  getContacts,
  getFilter,
  getError,
  getFilteredContacts,
}

export default contactsSelectors;