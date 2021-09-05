import {Route, Switch} from 'react-router-dom'
import {HomePage} from "../HomePage/HomePage";
import {Contacts} from "../Contacts/Contacts";
import {SignUp} from "../AuthNav/SignUp/SignUp";
import {SignIn} from "../AuthNav/SignIn/SignIn";
import {PrivateRoute} from "../PrivateRoute";

export const Main = () => {
  return (
	<main>
	  <section>
		<Switch>
		  <Route exact path='/'>
			<HomePage/>
		  </Route>
		  <PrivateRoute path='/contacts'>
			<Contacts/>
		  </PrivateRoute>
		  <Route path='/register'>
			<SignUp/>
		  </Route>
		  <Route path='/login'>
			<SignIn/>
		  </Route>
		</Switch>
	  </section>
	</main>
  )
}

