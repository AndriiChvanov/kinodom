import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import KinodomService from "./services/request";
import KinodomServiceContext from "./components/KinodomServiceContext";
import store from "./store";

import "./index.scss";
const kinodomService = new KinodomService();

const render = function () {
	ReactDOM.render(
		<Provider store={store}>
			<KinodomServiceContext.Provider value={kinodomService}>
				<Router>
					<App />
				</Router>
			</KinodomServiceContext.Provider>
		</Provider>,
		document.getElementById("root")
	);
};

render();