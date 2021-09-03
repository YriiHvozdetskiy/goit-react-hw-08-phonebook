import s from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
	<nav>
	  <ul className={s.list}>
		<li className={s.item}>
		  <NavLink exact to='/'>
			Home
		  </NavLink>
		</li>
		<li className={s.item}>
		  <NavLink to='/contacts'>
			Contacts
		  </NavLink>
		</li>
	  </ul>
	</nav>)
}

