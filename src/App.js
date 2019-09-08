import React from "react";
import './App.css';
import { store } from "./store";
import { Provider } from "react-redux";
import Counter from './pages/Counter'

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Counter />
			</Provider>
		</div>
	);
}

export default App;
