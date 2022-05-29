import React from "react";
import "./App.css";
import PublicRoutes from "./routes/routes";
import CustomizedSnackbars from "./components/MUI/Snackbar/Snackbar";
function App() {
	return (
		<div className="App">
			<PublicRoutes />
			<CustomizedSnackbars />
		</div>
	);
}

export default App;
