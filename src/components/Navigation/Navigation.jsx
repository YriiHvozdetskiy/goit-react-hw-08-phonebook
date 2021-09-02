import s from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
	<nav className={s.nav}>
	  <ul className={s.list}>
		<li className={s.item}>
		  <NavLink to='/'>
			Home
		  </NavLink>
		</li>
		<li className={s.item}>
		  <NavLink to='/contacts'>
			Contacts
		  </NavLink>
		</li>
	  </ul>
	  <ul className={s.list}>
		<li className={s.item}>
		  <NavLink to='/registration'>
			Sing up
		  </NavLink>
		</li>
		<li className={s.item}>
		  <NavLink to='/login'>
			Sing in
		  </NavLink>
		</li>
	  </ul>
	</nav>)
}

