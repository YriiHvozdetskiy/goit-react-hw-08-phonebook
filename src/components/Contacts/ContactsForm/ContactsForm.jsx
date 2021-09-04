import {DebounceInput} from 'react-debounce-input';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './ContactsForm.module.scss';
import {contactsOperations, contactsSelectors} from "../../../redux/contacts";
import toast from "react-hot-toast";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const handleChange = e => {
	const {name, value} = e.target;

	switch (name) {
	  case 'name':
		setName(value);
		break;
	  case 'number':
		setNumber(value);
		break;
	  default:
		return;
	}
  };

  const handleCoincidence = currentName => {
	if (!contacts) return;
	// якщо імя вже є в контактах повідомляєм і не даєм дод імя поки користувач не зміне його
	if (contacts.find(({name}) => name.toLowerCase() === currentName)) {
	  toast.error(`${name} is already in contacts`);
	  return true;
	}
  };

  const handleSubmit = e => {
	e.preventDefault();
	// перед відправкою перевіряєм чи таке імя є в списку
	if (handleCoincidence(name.toLowerCase())) return;

	// створюєм обєкт з даних які прийшли з форми + дод id
	const contact = {id: nanoid(), name, number};
	dispatch(contactsOperations.addContact(contact));

	// обнуляєм поля input після создання контакта
	setName('');
	setNumber('');
  };

  return (
	<form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
	  <label className={s.label}>Name</label>
	  <DebounceInput
		className={s.input}
		name="name"
		pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
		title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
		required
		value={name}
		debounceTimeout={300}
		onChange={handleChange}
	  />
	  <label className={s.label}>Number</label>
	  <DebounceInput
		className={s.input}
		type="tel"
		name="number"
		value={number}
		pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
		title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
		required
		debounceTimeout={300}
		onChange={handleChange}
	  />
	  <button className={s.button} type="submit">
		Add contact
	  </button>
	</form>
  );
};