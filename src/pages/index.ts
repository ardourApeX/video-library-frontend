import SignUp from "./Signup/Signup";
import Login from "./Login/Login";

const publicRoutes: Array<any> = [
	{
		path: "/signup",
		Component: SignUp,
	},
	{
		path: "/login",
		Component: Login,
	},
];

export default publicRoutes;
