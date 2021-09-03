import s from './Header.module.scss'
import {Navigation} from "./Navigation/Navigation";
import {useSelector} from "react-redux";
import {AuthNav} from "../AuthNav/AuthNav";
import {UserMenu} from "../UserMenu/UserMenu";
// import {authSelectors} from "../../redux/auth";

export const Header = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const isLoggedIn = false;
  return (
	<header className={s.header}>
	  <Navigation/>
	  {isLoggedIn ? <UserMenu/> : <AuthNav/>}
	</header>
  )
}

