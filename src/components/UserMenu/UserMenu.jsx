import {useDispatch, useSelector} from "react-redux";
import {authOperations, authSelectors} from "../../redux/auth";
import s from './UserMenu.module.scss';
import defaultAvatar from './avatar.jpg';

export const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
	<div className={s.container}>
	  <img className={s.avatar} src={avatar} alt="avatar"/>
	  <span className={s.name}>Welcome, {name}</span>
	  <button type='button' onClick={() => dispatch(authOperations.logOut())}>Log out</button>
	</div>
  )
}

