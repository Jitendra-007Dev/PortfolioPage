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
import { Footer } from './components/Global/Footer';



function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						path={"/"}
						element={<Home />}
					/>
				</Routes>
				<Footer />
			</Router>
		</>
	)
}

export default App;