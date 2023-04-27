import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Global/Header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* <Route
						key={index}
						path={route.path}
						exact={route.exact}
						element={route.sidebar}
					/> */}
				</Routes>
			</Router>
		</>
	)
}

export default App;