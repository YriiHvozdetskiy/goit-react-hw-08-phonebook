import {Route, Switch} from 'react-router-dom'
import {HomePage} from "../HomePage/HomePage";
import {Contacts} from "../Contacts/Contacts";
import {SignUp} from "../AuthNav/SignUp/SignUp";
import {SignIn} from "../AuthNav/SignIn/SignIn";
import {PrivateRoute} from "../PrivateRoute";
import {PublicRoute} from "../PublicRoute";

export const Main = () => {
  return (
	<main>
	  <section>
		<Switch>

		  <PublicRoute exact path='/'>
			<HomePage/>
		  </PublicRoute>

		  <PublicRoute path='/register' restricted redirectTo='/contacts'>
			<SignUp/>
		  </PublicRoute>

		  <PublicRoute path='/login' restricted redirectTo='/contacts'>
			<SignIn/>
		  </PublicRoute>

		  <PrivateRoute path='/contacts' redirectTo='/login'>
			<Contacts/>
		  </PrivateRoute>

		</Switch>
	  </section>
	</main>
  )
}

