import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/css/bootstrap.css"
import "./styles/vendors/linericon/style.css"
import "./styles/css/themify-icons.css"
import "./styles/vendors/owl-carousel/owl.theme.default.min.css"
import "./styles/vendors/fontawesome/css/all.min.css"
import "./styles/vendors/owl-carousel/owl.carousel.min.css"
import "./styles/vendors/nice-select/css/nice-select.css"
import "./styles/css/style.css"
import { Header } from './components/Global/Header';
import { Home } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						// key={index}
						path={"/home"}
						// exact={}
						element={<Home />}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App;