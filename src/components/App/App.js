import { Route } from "react-router-dom";
import Header from "../Common/Header";

import "./App.css";

export default function App() {
	return (
		<>
			<Header />
			<Route path="/">
				<h1>Home</h1>
			</Route>
		</>
	);
}
