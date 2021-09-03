import {Route, Switch} from 'react-router-dom'
import {HomePage} from "../HomePage/HomePage";
import {Contacts} from "../Contacts/Contacts";
import {SingUp} from "../SingUp/SingUp";
import {SingIn} from "../SingIn/SingIn";

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
			<SingUp/>
		  </Route>
		  <Route path='/login'>
			<SingIn/>
		  </Route>
		</Switch>
	  </section>
	</main>
  )
}

