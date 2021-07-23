import { Route } from "react-router-dom";
import Header from "./Common/Header";
import Main from "./Main/Main";

import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Route path="/" exact>
				<Main />
			</Route>
		</>
	);
}

export default App;