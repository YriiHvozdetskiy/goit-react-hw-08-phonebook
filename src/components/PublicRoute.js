import {useSelector} from "react-redux";
import {authSelectors} from "../redux/auth";
import {Redirect, Route} from "react-router-dom";

export const PublicRoute = ({
							  children,
							  restricted = false,
							  redirectTo = '/',
							  ...routeProps
							}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
	<Route {...routeProps}>{
	  shouldRedirect ? <Redirect to={redirectTo}/> : children
	}</Route>
  )
}

