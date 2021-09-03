import {NavLink} from "react-router-dom";
import {SignUp} from "./SignUp/SignUp";
import {SignIn} from "./SignIn/SignIn";
import s from './AuthNav.module.scss'

export const AuthNav = () => {
  return (
	<>
	  <ul className={s.list}>
		<li className={s.item}>
		  <NavLink exact to='/register'>
			Sign Up
		  </NavLink>
		</li>
		<li className={s.item}>
		  <NavLink to='/login'>
			Sign In
		  </NavLink>
		</li>
	  </ul>
	</>)
}

