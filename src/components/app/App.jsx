import React from "react";

import Header from "../header/Header";
import NewMovies from "../newMovies/NewMovies";
import Promo from "../promo/Promo";
import Price from "../price/Price";
import Catalog from "../catalog/Catalog";
import Instagram from "../instagram/Instagram";
import Footer from "../footer/Footer";
import "./App.scss";

function App() {
	return (
		<div className='App'>
			<Header />
			<NewMovies />
			<Promo />
			<Price />
			<Catalog />
			<Instagram />
			<Footer />
		</div>
	);
}

export default App;
