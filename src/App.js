import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {authOperations} from "./redux/auth";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
	dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
	<>
	  <Container>
		<Header/>
		<Main/>
	  </Container>
	</>
  );
}

