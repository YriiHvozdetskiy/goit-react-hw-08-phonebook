import {Route, Switch} from 'react-router-dom'
import {HomePage} from "../HomePage/HomePage";
import {Contacts} from "../Contacts/Contacts";
import {SignUp} from "../SignUp/SignUp";
import {SignIn} from "../SignIn/SignIn";

export const Main = () => {
  return (
	<main>
	  <section>
		<Switch>
		  <Route exact path='/'>
			<HomePage/>
		  </Route>
		  <Route path='/contacts'>
			<Contacts/>
		  </Route>
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

