import {NavLink} from "react-router-dom";
import s from './AuthNav.module.scss'

export const AuthNav = () => {
  return (
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
  )
}

