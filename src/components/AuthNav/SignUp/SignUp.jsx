import {useState} from "react";
import {useDispatch} from "react-redux";
import s from './SignUp.module.scss'
import {authOperations} from "../../../redux/auth";

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({target: {name, value}}) => {
	switch (name) {
	  case 'name':
		return setName(value);
	  case 'email':
		return setEmail(value);
	  case  'password':
		return setPassword(value);
	  default:
		return;
	}
  }

  const handleSubmit = e => {
	e.preventDefault();
	dispatch(authOperations.register({name, email, password}));
	setName('')
	setEmail('');
	setPassword('');
  }

  return (
	<div>
	  <h1> Sign Up(сторінка реєстрації)</h1>
	  <form className={s.form} onSubmit={handleSubmit}>
		<label className={s.label}>
		  name
		  <input type='text'
				 name='name'
				 value={name}
				 onChange={handleChange}
		  />
		</label>
		<label className={s.label}>
		  email
		  <input type='email'
				 name='email'
				 value={email}
				 onChange={handleChange}
		  />
		</label>
		<label className={s.label}>
		  password
		  <input type='password'
				 name='password'
				 value={password}
				 onChange={handleChange}
		  />
		</label>
		<button type='submit'>
		  Sign Up
		</button>
	  </form>
	</div>
  )
}

