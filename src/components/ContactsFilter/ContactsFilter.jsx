import { useDispatch } from 'react-redux';
import s from './ContactsFilter.module.scss'

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
	const searchValue = e.target.value; // value яке вели для пошуку контакта з input
	dispatch(filterContacts(searchValue)); // відправляєм в reducer
  };

  return (
	<>
	  <label className={s.label}>
		Find contacts by name
	  </label>
	  <input
		className={s.input}
		onChange={changeFilter}
	  />
	</>
  );
}

