import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import s from './ContactsList.module.scss';
import {contactsOperations, contactsSelectors} from "../../../redux/contacts";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);

  useEffect(() => {
	dispatch(contactsOperations.fetchContactsList());
  }, [dispatch]);

  const removeContact = id => {
	dispatch(contactsOperations.deleteContact(id));
  };

  return (
	// рендерем контакти з масиву filteredContacts || рендерем результати пошуку
	<ul className={s.list}>
	  {filteredContacts &&
	  filteredContacts.map(({id, name, number}) => {
		return (
		  <li className={s.item} key={id}>
			<span>{name}</span>: <span>{number}</span>
			<button
			  className={s.button}
			  type="button"
			  onClick={() => removeContact(id)}
			>
			  Delete
			</button>
		  </li>
		);
	  })}
	</ul>
  );
}