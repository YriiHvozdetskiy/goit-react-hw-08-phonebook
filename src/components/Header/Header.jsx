import s from './Header.module.scss'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
  return (
	<header className={s.header}>
	  <Navigation/>
	</header>
  )
}

