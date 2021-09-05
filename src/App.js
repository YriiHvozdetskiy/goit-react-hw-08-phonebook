import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {authOperations, authSelectors} from "./redux/auth";

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
	dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
//TODO додати loader чи скілетон
  return (
	!isFetchingCurrent &&
	(<Container>
	  <Header/>
	  <Main/>
	</Container>)
  );
}

