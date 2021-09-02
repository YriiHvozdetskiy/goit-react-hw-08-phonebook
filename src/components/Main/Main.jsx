import {Route, Switch} from 'react-router-dom'
import {HomePage} from "../HomePage/HomePage";
import {ContactsList} from "../ContactsList/ContactsList";
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
			<ContactsList/>
		  </Route>
		  <Route path='/registration'>
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

