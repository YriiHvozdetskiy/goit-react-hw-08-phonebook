import {ContactsFilter} from "./ContactsFilter/ContactsFilter";
import {ContactForm} from "./ContactsForm/ContactsForm";
import {ContactsList} from "./ContactsList/ContactsList";
import {useSelector} from "react-redux";
import {contactsSelectors} from "../../redux/contacts";

export const Contacts = () => {
  const getContacts = useSelector(contactsSelectors.getContacts);

  return (
	<>
	  <ContactForm/>
	  {getContacts.length === 0 && <h2>you have no contacts</h2>}
	  {getContacts.length !== 0 && <ContactsFilter/>}
	  <ContactsList/>
	</>)
}

