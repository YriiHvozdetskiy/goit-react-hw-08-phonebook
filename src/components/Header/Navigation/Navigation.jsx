import s from './Navigation.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelectors} from "../../../redux/auth";

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
	<nav>
	  <ul className={s.list}>
		<li className={s.item}>
		  <NavLink exact to='/'>
			Home
		  </NavLink>
		</li>
		{isLoggedIn &&
		<li className={s.item}>
		  <NavLink to='/contacts'>
			Contacts
		  </NavLink>
		</li>}
	  </ul>
	</nav>)
}

