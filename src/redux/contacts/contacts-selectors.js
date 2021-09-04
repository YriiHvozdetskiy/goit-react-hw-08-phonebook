const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

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