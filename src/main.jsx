import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CustomizationProvider } from "./constants/Customization";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<CustomizationProvider>
				<App />
			</CustomizationProvider>
		</Router>
	</React.StrictMode>
);
