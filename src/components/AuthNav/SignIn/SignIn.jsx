import {useDispatch} from "react-redux";
import {useState} from "react";
import {authOperations} from "../../../redux/auth";
import s from './SignIn.module.scss'

export const SignIn = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({target: {name, value}}) => {
	switch (name) {
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
	// dispatch(authOperations.logIn({email, password}))
	setEmail('')
	setPassword('')
  }

  return (
	<div>
	  <h1> Sing in (Увійти)</h1>
	  <form className={s.form} onSubmit={handleSubmit}>
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
		  Sign in
		</button>
	  </form>
	</div>
  )
}

