import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
function PublicRoutes(): JSX.Element {
	return (
		<Routes>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<SignUp />}></Route>
		</Routes>
	);
}
export default PublicRoutes;
