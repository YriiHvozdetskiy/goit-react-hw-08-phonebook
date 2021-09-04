import {Navigation} from "./Navigation/Navigation";
import {useSelector} from "react-redux";
import {AuthNav} from "../AuthNav/AuthNav";
import {UserMenu} from "../UserMenu/UserMenu";
import s from './Header.module.scss'
import {authSelectors} from "../../redux/auth";

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
	<header className={s.header}>
	  <Navigation/>
	  {isLoggedIn ? <UserMenu/> : <AuthNav/>}
	</header>
  )
}

