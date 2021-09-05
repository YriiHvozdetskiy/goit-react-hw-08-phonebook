import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelectors} from "../redux/auth";

export const PrivateRoute = ({children, ...routeProps}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
	<>
	  <Route {...routeProps}>{
		isLoggedIn ? children : <Redirect to='/login'/>}</Route>
	</>)
}

